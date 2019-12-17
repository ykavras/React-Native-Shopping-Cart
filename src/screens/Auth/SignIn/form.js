import React, {Component} from 'react';
import {Button, Content, Input, Item, Spinner, Text} from 'native-base';
import {Formik} from 'formik';
import validations from './validations';
import {SignIn} from '../../../store/Actions/Auth/SignIn';
import {connect} from 'react-redux';
import AuthControl from '../../../helper/AuthControl';

class SignInForm extends Component {
  _handleSubmit = async (values, bag) => {
    try {
      await this.props.SignIn(values, bag);
      const {token} = await this.props.SignInReducer;
      token !== null && (await AuthControl.saveToken(token));
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={this._handleSubmit}
        validationSchema={validations}>
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          setFieldTouched,
          isValid,
          isSubmitting,
        }) => (
          <Content padder>
            <Item error={errors.email && touched.email}>
              <Input
                returnKeyType={'next'}
                onSubmitEditing={() => this.passwordRef._root.focus()}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="email"
                onBlur={() => setFieldTouched('email')}
                autoCorrect={false}
                autoCapitalize={'none'}
              />

              {errors.email && touched.email && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              )}
            </Item>

            <Item error={errors.password && touched.password}>
              <Input
                ref={ref => (this.passwordRef = ref)}
                returnKeyType={'go'}
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="password"
                onBlur={() => setFieldTouched('password')}
                autoCapitalize={'none'}
                secureTextEntry={true}
              />

              {errors.password && touched.password && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              )}
            </Item>
            <Button
              block
              success
              disabled={!isValid || isSubmitting}
              onPress={handleSubmit}
              style={{marginVertical: 20}}>
              {isSubmitting && <Spinner size={'small'} color={'white'} />}
              <Text>SignIn</Text>
            </Button>
            <Button
              block
              rounded
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text>SignUp</Text>
            </Button>
          </Content>
        )}
      </Formik>
    );
  }
}
const mapStateToProps = state => {
  return {
    SignInReducer: state.SignInReducer,
  };
};

const mapStateToDispatch = {
  SignIn,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(SignInForm);

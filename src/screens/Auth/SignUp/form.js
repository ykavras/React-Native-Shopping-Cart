import React, {PureComponent} from 'react';
import {Button, Content, Input, Item, Spinner, Text, Icon} from 'native-base';
import {Formik} from 'formik';
import {Keyboard} from 'react-native';
import validations from './validations';
import NavigationService from '../../../helper/NavigationService';
import {SignUp} from '../../../store/Actions/Auth/SignUp';
import {connect} from 'react-redux';
import styles from './styles';

class SignUpForm extends PureComponent {
  closeKeyboard = () => {
    Keyboard.dismiss();
  };
  _handleSubmit = async (values, bag) => {
    try {
      await this.props.SignUp(values, bag);
      const {data} = await this.props.SignUpReducer;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Formik
        initialValues={{
          email: '',
          name: '',
          surname: '',
          phone: '',
          address: '',
          password: '',
          confirmPassword: '',
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
          handleBlur,
        }) => (
          <Content padder>
            <Item error={errors.email && touched.email}>
              <Input
                returnKeyType={'next'}
                onSubmitEditing={() => this.nameRef._root.focus()}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Email"
                onBlur={() => setFieldTouched('email')}
                autoCapitalize={'none'}
                keyboardType="email-address"
              />

              {errors.email && touched.email && <Icon name="close-circle" />}
            </Item>
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}

            <Item error={errors.name && touched.name}>
              <Input
                returnKeyType={'next'}
                ref={ref => (this.nameRef = ref)}
                onSubmitEditing={() => this.surnameRef._root.focus()}
                onChangeText={handleChange('name')}
                value={values.name}
                placeholder="Name"
                onBlur={() => setFieldTouched('name')}
              />

              {errors.name && touched.name && <Icon name="close-circle" />}
            </Item>

            {errors.name && touched.name && (
              <Text style={styles.errorText}>{errors.name.message}</Text>
            )}

            <Item error={errors.surname && touched.surname}>
              <Input
                returnKeyType={'next'}
                ref={ref => (this.surnameRef = ref)}
                onSubmitEditing={() => this.phoneRef._root.focus()}
                onChangeText={handleChange('surname')}
                value={values.surname}
                placeholder="Surname"
                onBlur={() => setFieldTouched('surname')}
              />

              {errors.surname && touched.surname && (
                <Icon name="close-circle" />
              )}
            </Item>

            {errors.surname && touched.surname && (
              <Text style={styles.errorText}>{errors.surname.message}</Text>
            )}

            <Item error={errors.phone && touched.phone}>
              <Input
                returnKeyType={'done'}
                ref={ref => (this.phoneRef = ref)}
                onSubmitEditing={() => this.addressRef._root.focus()}
                onChangeText={handleChange('phone')}
                value={values.phone}
                placeholder="Phone"
                onBlur={() => setFieldTouched('phone')}
                keyboardType="phone-pad"
              />

              {errors.phone && touched.phone && <Icon name="close-circle" />}
            </Item>

            {errors.phone && touched.phone && (
              <Text style={styles.errorText}>{errors.phone.message}</Text>
            )}

            <Item error={errors.address && touched.address}>
              <Input
                returnKeyType={'next'}
                ref={ref => (this.addressRef = ref)}
                onSubmitEditing={() => this.passwordRef._root.focus()}
                onChangeText={handleChange('address')}
                value={values.address}
                placeholder="Address"
                onBlur={() => setFieldTouched('address')}
              />

              {errors.address && touched.address && (
                <Icon name="close-circle" />
              )}
            </Item>

            {errors.address && touched.address && (
              <Text style={styles.errorText}>{errors.address.message}</Text>
            )}

            <Item error={errors.password && touched.password}>
              <Input
                returnKeyType={'next'}
                ref={ref => (this.passwordRef = ref)}
                onSubmitEditing={() => this.passwordConfirmRef._root.focus()}
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Password"
                onBlur={() => setFieldTouched('password')}
                secureTextEntry={true}
                autoCorrect={false}
              />

              {errors.password && touched.password && (
                <Icon name="close-circle" />
              )}
            </Item>

            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}

            <Item error={errors.confirmPassword && touched.confirmPassword}>
              <Input
                ref={ref => (this.passwordConfirmRef = ref)}
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                placeholder="Password Confirmation"
                secureTextEntry={true}
                autoCorrect={false}
                onSubmitEditing={this.closeKeyboard}
                onBlur={() => setFieldTouched('confirmPassword')}
              />

              {errors.confirmPassword && touched.confirmPassword && (
                <Icon name="close-circle" />
              )}
            </Item>

            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <Button
              block
              success
              disabled={!isValid || isSubmitting}
              onPress={handleSubmit}
              style={{marginVertical: 20}}>
              {isSubmitting && <Spinner size={'small'} color={'white'} />}
              <Text>SignUp</Text>
            </Button>
            <Button
              block
              rounded
              onPress={() => NavigationService.navigate('SignIn')}>
              <Text>SignIn</Text>
            </Button>
          </Content>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  return {
    SignUpReducer: state.SignUpReducer,
  };
};

const mapStateToDispatch = {
  SignUp,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(SignUpForm);

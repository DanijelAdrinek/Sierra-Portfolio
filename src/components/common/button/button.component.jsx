import { ButtonStyles } from "./button.styles.jsx";

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return <ButtonStyles className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</ButtonStyles>;
}

export default Button;
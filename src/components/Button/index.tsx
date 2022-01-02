import { ButtonProps } from 'react-bootstrap';
import { Button as BSButton } from 'react-bootstrap';

export default function Button({ children, ...props }: ButtonProps): JSX.Element {
    return <BSButton {...props}>{children}</BSButton>;
}

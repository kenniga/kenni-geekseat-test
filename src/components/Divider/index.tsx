import classNames from 'classnames';
import { IDividerProps } from './interface';

export default function Divider({
    children,
    alignment,
    lineStyle,
    lineWeight,
    className: classNameProps
}: IDividerProps): JSX.Element {
    const className = classNames({
        divider: true,
        [`divider--justify-${alignment}`]: alignment,
        [`divider--${lineStyle}`]: lineStyle,
        [`divider--${lineWeight}`]: lineWeight,
        [`${classNameProps}`]: classNameProps
    });
    return (
        <div className={className}>
            <span className="divider__content">{children ? children : ''}</span>
        </div>
    );
}

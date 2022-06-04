
interface IInputLoginProps {
    type?: string;
    label: string;
    value: string;
    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
}

export const InputLogin: React.FC<IInputLoginProps> = (props) => {
   
    return(
        <label>
            <span>{props.label}</span>
            <input 
            value={props.value}
            type={props.type}
            onKeyDown={e => e.key === 'Enter' && props.onPressEnter?.()} 
            onChange={e => props.onChange(e.target.value)} />
        </label>
    );
}
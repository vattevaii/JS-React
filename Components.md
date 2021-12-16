React is designed around the concept of **reusable components**. You define *small* components and you put them together to form *bigger* components.

All components small or big are **reusable**, even across different projects.

A React component — in its simplest form — is a plain-old JavaScript function:
*```
function Button (props) {
  // Returns a DOM element here. For example:
  return <button type="submit">{props.label}</button>;
}
class Button extends React.Component{
    const { label } = this.props
    render(){
        return <button type="submit">{label}</button>;
    }
}
```*
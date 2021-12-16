### `npm install`
Install all the dependencies required for the prohect to run

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Props
Value to pass to child component from parent element.
```
<ComponentName propName1=value2 propName2=value2 />
```
Example:
```
<Button clickFunction={clickHandler} value="Hello">
```
Above clickHandler is function passed to Button as prop and "Hello" is value prop.

# onClick, onChange
As mentioned, it does exactly the same thing.. Should be a function callback.
i.e. () => function()
Example:
```
<button onClick={()=>takeMe(data)}>
or if function already present and no need for data to pass or event only needed..
<button onClick={takeMe}>
```
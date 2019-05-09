# glyphicon

A drop-in replacement for the [react-bootstrap](https://react-bootstrap.github.io) Glyphicon component that works with React 16+.

### Why?

[Bootstrap 4](https://getbootstrap.com) removes the Glyphicon component. It was really useful. You wouldn't think that would be a problem. You can just stick with [Bootstrap 3](https://getbootstrap.com/docs/3.4/), but if you are using [react-bootstrap](https://react-bootstrap.github.io) that means you also have to stick with React 15, which is a bit out of date to say the least.

## Usage

Install the module.

```
npm install --save @strongdm/glyphicon
```

Import it. Done.

```jsx
import Glyphicon from '@strongdm/glyphicon'

export default function ComponentWithAnIcon () {
    return <div>
        Look at this icon! <Glyphicon glyph='exclamation-sign' />
    </div>
}
```

This component uses the react-bootstrap 0.3+ conventions of `bsStyle` and `bsSize`. We will be updating it to comply with react-bootstrap 1.0.0 shortly.

## Thanks to:

* [React Bootstrap](https://react-bootstrap.github.io) contributors for creating an excellent React UI toolkit.
* [DarkSeal](https://github.com/Darkseal/bootstrap4-glyphicons) for porting the glyphicons CSS to Boostrap 4.

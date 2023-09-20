# js-style-builder-class
Json object(who included camelCase css attribute)  transform to inline css content. for Text's attributes only


## Usage
```js
const customStyle = {"color":"#000"
"fontFamily":"Roboto"
"fontSize":32
"fontStyle":"normal"
"fontWeight":400
"textAlign":"center"
"textTransform":"capitalize"
}

const inlineCss = new StyleBuilder(customStyle).render();

// text-align: center; text-transform: capitalize; font-weight: 400; font-style: normal; font-size: 32px; font-family: Roboto; color: #000;




const inlineCss = new StyleBuilder(customStyle).textAlign('left').fontWeight(700).render();

// text-align: left; text-transform: capitalize; font-weight: 700; font-style: normal; font-size: 32px; font-family: Roboto; color: #000;




const inlineCss = new StyleBuilder(customStyle);

if(customStyle.fontWeight > 300) {
  inlineCss.fontStyle('italic');
}

inlineCss.render();

// // text-align: center; text-transform: capitalize; font-weight: 400; font-style: italic; font-size: 32px; font-family: Roboto; color: #000;
```


## Roadmap

- [x] ES5 build
- [ ] Validate attribute values
- [ ] Extend attribute scope

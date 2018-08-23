# ObjTK

ObjTK (Object Tool-Kit) is an Object Oriented CSS and JS Behavior Library which uses Webpack, PostCSS, and Babel to provide a modern front-end starter that adheres to best practices.  ObjTK uses Astrum to provide a deliverable pattern library and styleguide.

## Installing and Running

### Install

We recommend using `yarn` because it's way faster and doesn't suck as much as npm.

```
yarn install
```

### Building (Production)

```
npm run build
```

### Watching (Development)

Watch for changes -- this does not upload for you.

```
npm run watch
```

### Serve (Development)

Serve the Astrum Pattern Library with Browser Sync.

```
npm run serve
```

### Add an attribute

```
npm run add --objtk:attribute=<component>.css
```

### Add a Layout

```
npm run add --objtk:layout=<component>.css
```

### Add a Theme

```
npm run add --objtk:theme=<component>.css
```

## Object Oriented CSS

Object oriented CSS is a style of writing CSS which incorporates principles of object oriented programming such as:

- Separation of Concerns
- Abstraction and Polymorphism
- Encapsulation

### Separation of Concerns

ObjTK divides each "component" into four distinct fragments:

- Structures (HTML)
- Attributes (CSS Style)
- Layouts (CSS Display and Positioning)
- Themes (CSS Values and Variables)

Each fragment of a component has a separate directory which contains one CSS file per component.

#### Components

A component is a combination of HTML (Structure) and one or more CSS fragments (Attributes, Layouts, Themes).

- A component name is a combination of 1 or more _single word_ CSS class names separated by dashes.
- A component may extend another component by adding classes.
- A component may contain other components.

##### Example Component Names

- date
- date-birthday
- date-published
- message
- message-error

To create a new component, run:

```
npm run make --objtk:component=<section>/<component>
```

The above command will create a new component in the Astrum Pattern Library, as well as create CSS placeholder files for the component's attributes and layouts (but not themes).

_Note: The section can be the common component name, e.g. `messages` for all messages, or a section related to the overall type of elements, e.g. `forms`_

##### Structures

Structures are an HTML element whose classes map directly to the component name.  Note that classes themselves should never be more than one word.

```html
<h1 class="title">This is the title of an article</h1>
```

A single structure may contain any number of child HTML elements or sub-structures:

```html
<div class="item news">
	<h1 class="title">This is the title of an item</h1>
	<p class="summary">
		Lorem ipsum dolor sit amet, consectetur
		adipisicing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna
		aliqua. Ut enim ad minim veniam, quis
		nostrud exercitation ullamco laboris
		nisi ut aliquip ex ea commodo consequat.
	</p>
	<a href="#">Read More</a>
</div>
```

##### Attributes

Attributes define those properties of a component which constitute its stylistic aspects, not those which are unrelated to the placement or layout of elements or sub-components within the component.  You can add an attribute only by running the following at the command line:

```
npm run add --objtk:attribute=<component>.css
```

The attribute will be added by creating the requisite CSS file in the `resources/assets/attributes` directory.

Some attributes are very simple:

```scss
.title {
	font-size: 2rem;
}
```

If a component has a structure which consists of other structures, the attributes for that component define the overloaded properties of its sub-components.  See the `& .title` overload below:

File: `resources/styles/assets/attribute/item.css`
```scss
.item {
	padding: 2rem;

	& .title {
		color: var(--red);
	}
}
```

Although the `title` constitutes a separate component, when nested in a parent component, it is the parent component's attributes which determines those properties which _differ_ from the base-attribute.

###### Valid Attribute Properties

Not all CSS properties are valid attribute properties.  Examples of valid attribute properties include:

- font-size
- font-family
- padding
- color
- background-color
- etc...

###### Invalid Attribute Properties

Properties which are invalid on an attribute concern themselves with the placement or "layout" of things.  Examples of invalid attribute properties include:

- display
- margin
- float
- position
- etc...

#### Layouts

While attributes constitute the veneer of a component, layouts separate out the placement of a component's child elements or structures with respect to one another.  Layouts are defined separately from attributes such that one can easily change the layout of a component without affecting the overall style.

File: `resources/styles/assets/layouts/title.css`
```scss
.title {
	margin-bottom: 1em;
}
```

Just as with attributes, a parent can overload its child's layout:

File: `resources/styles/assets/layouts/item.css`
```scss
.item {
	& .title {
		margin-bottom: 2em;
	}
}
```

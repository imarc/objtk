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

### Add a Mixin

```
npm run add --objtk:mixin=<component>.<ext>
```

## Object Oriented CSS

Object oriented CSS is a style of writing CSS which incorporates principles of object oriented programming such as:

- Separation of Concerns
- Abstraction and Polymorphism
- Encapsulation

The goal is to create leaner, cleaner, more maintainable CSS that works in a modular fashion.

### Separation of Concerns

ObjTK divides each "component" into four distinct fragments:

- Structures (HTML)
- Attributes (CSS Style)
- Layouts (CSS Display and Positioning)
- Themes (CSS Values and Variables)

Structures are developed in the pattern library, _then_ the remaining CSS fragments are added to style them.  CSS fragments contain one CSS file per component.

#### Components

A component is a combination of HTML (Structure) and one or more CSS fragments (Attributes, Layouts, Themes).

- A component name is a combination of 1 or more _single word_ CSS class names separated by dashes, e.g. `message-error`, `action-suggested`.
- A component may extend another component by adding classes.
- A component may contain other components.

##### Creating a Component

To create a new component, run:

```
npm run make --objtk:component=<section>/<component>.<ext>
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

Structures will be created in the pattern library under `public/patterns/components`.  Each structure contains an `html` file as well as an `md` file to define the markup and the description.

##### Attributes

Attributes define those properties of a component which constitute its stylistic aspects, not those which are unrelated to the placement or layout of elements or sub-components within the component.  Some attributes are very simple:

```scss
.title
	font-size: 2rem
```

If a component has a structure which consists of other structures, the attributes for that component define the overloaded properties of its sub-components.  See the `& .title` overload below:

File: `resources/styles/assets/attribute/item.sss`
```css
.item
	padding: 2rem

	& .title
		color: var(--red)
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

###### Creating an Attribute

Attributes will be created automatically when you create a component, however, if you need to add a new attribute for a component that was modified or manually adde, you can run:

```
npm run add --objtk:attribute=<component>.<ext>
```

##### Layouts

While attributes constitute the veneer of a component, layouts separate out the placement of a component's child elements or structures with respect to one another.  Layouts are defined separately from attributes such that one can easily change the layout of a component without affecting the overall style.

File: `resources/styles/assets/layouts/title.sss`
```scss
.title
	margin-bottom: 1em
```

Just as with attributes, a parent can overload its child's layout:

File: `resources/styles/assets/layouts/item.sss`
```scss
.item
	& .title
		margin-bottom: 2em
```

###### Creating a Layout

Layouts will be created automatically when you create a component, however, if you need to add a new layout for a component that was modified or manually added, you can run:

```
npm run add --objtk:layout=<component>.<ext>
```

##### Themes

Themes are designed to allow things like colors or sizes to be easily adjusted.  They do not change the attributes, but merely the value of the properties defined therein.  The theme should not contain anything other than CSS variable overloads.

So, for example, if your attributes contains:

```scss
.title
	color: var(--color)
```

You might have:

File: `resources/assets/styles/themes/title.sss`:
```scss
.title
	--color: var(--red)
```

###### Creating a Theme

Themes are not required as attributes should only use variables defined in the `_base.sss` file and will inherit values from the `:root` element, however if you need to create a theme you can run:

```
npm run add --objtk:theme=<component>.<ext>
```

#### Abstraction and Polymorphism

The principle of abstraction and polymorphism takes advantage of CSS's built in specificity.

Component names reflect this abstraction via a simple naming convention.  Names consist of a "base class" and _zero or more_ "modifiers" in descending order of importance.  Using an example from above (`message-error`) the base is `message` the modifier is `error`.  This component can then be extended further with additional modifiers, e.g. `message-error-important`.

Each segment of a component name corresponds directly to a CSS class.  Name segments _CANNOT_ be more than one word.  If you think you need a multi-word name segment (and therefore a multi-word class), you really need abstraction and polymorphism.

An example of component named `message-error-important` would have a structure like the following:

```html
<div class="message error important">
	<p>
		This is the message.
	</p>
</div>
```

This allows us to take advantage of CSS specificity as it was intended to be used.

Our base component establishes the default properties and values, using variables where it makes sense.  Note, this is an attribute fragment:

File: `resources/assets/styles/attributes/message.sss`
```scss
.message
	padding: var(--padding)
	border: solid var(--border) var(--border-color)
	color: var(--color)
```

The modifier `important` makes our color a background color and overloads the text so it is white.  Note, that this is an attribute fragment.

File: `resources/assets/styles/attributes/message-important.sss`
```scss
.message.important
	color: #ffffff
	background-color: var(--color)
```

The `error` modifier allows us to set what our color is on error messages.  Note, that this is a theme fragment, not an attribute.

File: `resources/assets/styles/themes/message-error.sss`
```scss
.message.error
	--color: var(--red)
```

##### Concerns

The primary concern raised against abstraction and polymorphism is that it makes CSS more complex and it can be difficult to change things because you have to deal with multiple layers of specificity.  This, however, is inaccurate.

Using multiple word class names like `message-important` and `message-error` to apply more specific properties to specific elements increases not only the potential number of CSS rules you need to replace, but also increases the likelihood that you will violate separation of concerns and thereby have to change multiple HTML files (adding/removing classes) to add or remove the styles you want.

The reason this concern is often raised is because it is perceived that defining common properties in base level attributes may then need to be overloaded later _with exceptions_.  However, the cause for this is generally that there is not enough abstraction/polymorphism and that the developer has defined that attribute at an improper level of abstraction.

By adding as much abstraction as possible, you create more levels at which the potential for adding it at an appropriate level is increased.  Additionally, it is always possible to add even more higher levels of specificity for minority exceptions, or to change the default if the majority need to change and then add exceptions for the new minority.

#### Encapsulation

While other frameworks and libraries use verbose, repetitive naming conventions which bloat your HTML and CSS, ObjTK uses a series of multiple classes which reflect the encapsulation of one object by another.

Let's compare a Bootstrap 4 structure to an ObjTK structure:

Example: `Bootstrap 4`
```html
<div class="modal" id="myModal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Modal Heading</h4>
				<button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>
			<div class="modal-body">
				<p>
				Modal body..
				</p>
			</div>
		</div>
	</div>
</div>
```

A comparable structure in ObjTK might look like the following:

Example: `ObjTK`
```html
<div class="modal" id="myModal">
	<div class="dialog">
		<div class="controls">
			<button type="action" data-close="myModal">&times;</button>
		</div>
		<div class="content">
			<header>
				<h1 class="title">Modal Heading</h1>
			</header>
			<div class="body">
				<p>
				Modal body..
				</p>
			</div>
		</div>
	</div>
</div>
```

Each class in the ObjTK example constitutes its own separate component.  That is to say, before creating a `modal`, we will have created a `dialog` and before creating a `dialog` we will have created `controls` and `content`... and so on.

Note, that while these components will implicitly always have a structure, they do not need to have any attributes or layouts defined.  It is completely possible to work on a complex object without having to figure out every detail of its encapsulate objects beforehand.  Properties which begin to demonstrate themselves as common to the encapsulated objects can then be moved ot refactored later (making CSS smaller, not larger).

Assuming, for example, that we had no components defined it is completely possible to simply run `npm run make --objtk:component=ui/modal`.  From there we use the above structure, then modify our attributes:

File: `resources/assets/styles/attributes/modal.sss`
```scss
.modal
	& > .dialogue
		& > .content
			& > header
				& > .title
					font-weight: bold
```

We did not need to first run `npm run make --objtk:component=headings/title` nor set the `font-weight: bold;` at the level of every title.  While this example may seem contrived it is merely used to demonstrate a point.  It is still _strongly suggested_ that sub-components be created first.  This not only helps to document the use of structures and create placeholders for their attributes/layouts, it also helps to keep your CSS smaller because in _most_ cases, subcomponents will have common properties which are only overloaded with such high specificity as above in unique circumstances.

# ObjTK

ObjTK (Object Tool-Kit) is an Object Oriented CSS and JS Behavior Library which uses Webkit, PostCSS, and Babel to provide a modern front-end framework that adheres to best practices.  ObjTK uses Astrum to provide a deliverable pattern library and styleguide.

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

### Add a Component

Astrum is used for building the pattern library.  Since astrum is first and foremost concerned with HTML, this will not add corresponding entities/layouts/themes (that's on you), but will provide you a space to organize and define the markup that constitutes a given component.

```
npm run astrum new <section>/<component>
```

### Add an Entity

```
npm run add --objtk:entity=<name>.css
```


### Add a Layout

```
npm run add --objtk:layout=<name>.css
```

### Add a Theme

```
npm run add --objtk:theme=<name>.css
```

### Add a Mixin

```
npm run add --objtk:mixin=<name>.css
```

## Object Oriented CSS

Object oriented CSS is a style of writing CSS which incorporates principles of object oriented programming such as:

- Separation of Concerns
- Abstraction and Polymorphism
- Encapsulation

### Separation of Concerns

Traditional approaches to CSS include ideas of "components" or "patterns."  While these are a major step forward in modularity, they do not do enough to encourage clear separation of concerns with respect to CSS code.  Each component is generally still a mix of varying concerns including the theming (colors and image), entities (application of thematic elements as a particular veneer), and layout (placement of elements).

ObjTK divides each "component" into three distinct pieces:

- Entity
- Layout
- Theme

#### Entities

Entities define those properties of a component which constitute it's "veneer."  The "veneer" is the stylistic aspects of a component which are unrelated to the placement or layout of lements within the component.

Some entities are very simple:

```html
<h1 class="title">This is the title of an article</h1>
```

```scss
.title {
	font-size: 2rem;
}
```

In the above example the `font-size` is considered a property of the entity. Each entity is the master of its properties.  This concept is called "encapsulation."  In addition to various CSS properties, other entities can also considered to be properties:

```html
<div class="item">
	<h1 class="title">This is the title of an item</h1>
	<p class="summary">
		Lorem ipsum dolor sit amet, consectetur
		adipisicing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna
		aliqua. Ut enim ad minim veniam, quis
		nostrud exercitation ullamco laboris
		nisi ut aliquip ex ea commodo consequat.
	</p>
</div>
```

The above HTML represents an `item` entity which has two properties which are child entities, namely `title` and `summary`.  Each of these entities would have a separate `.css` file defined in the `resources/styles/assets/entities` folder:

File: `resources/styles/assets/entities/title.css`
```scss
.title {
	font-size: 2rem;
}
```

File: `resources/styles/assets/entities/summary.css`
```scss
.summary {
	font-style: italic;
}
```

File: `resources/styles/assets/entities/item.css`
```scss
.item {
	padding: 2rem;

	& .title {
		color: var(--red);
	}
}
```

Note in the final example the parent `item` overloads the child `title`'s color property.  Although the `title` constitutes a separate entity, parent entities determine those properties which _differ_ from the base-entity.

##### Valid Properties

Not all CSS properties are valid entity properties.  Examples of valid entity properties include:

- font-size
- font-family
- padding
- color
- background-color
- etc...

###### Invalid properties

Properties which are invalid on an entity concern themselves with the placement or "layout" of things.  Examples of invalid entity properties include:

- display
- margin
- float
- position
- etc...

#### Layouts

While entities constitute the veneer of a component, layouts separate out the placement of various child elements or entities with respect to one another.  Layouts are defined separately from entities such that one can easily change the placement of various elements or child entities within an entity without touching or working around the veneer.

File: `resources/styles/assets/layouts/title.css`

```scss
.title {
	margin-bottom: 1em;
}
```

Just as with entities, a parent can overload its child's layout:

File: `resources/styles/assets/layouts/item.css`

```scss
.item {
	& .title {
		margin-bottom: 2em;
	}
}
```

#### Themes

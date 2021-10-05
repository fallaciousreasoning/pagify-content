# README
Pagify is a simple web component for pagifying content. At the moment it's pretty bare bones but it does what I need it to.

## Usage

This library defines a simple web component `pagify-content` for pagifying some html. **Note:** the component will fill available space, so make sure the element it's inside has a height.

```html
<!-- Render the second page of the following html -->
<pagify-content currentPage="2">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
    <div>Four</div>
</pagify-content>
```

The component exposes the following methods, which are pretty self explanatory:

```ts
const component = document.querySelector('pagify-content');
component.nextPage(); // Goes to the next page, if available.
component.previousPage(); // Goes to the previous page, if available.
component.hasNext(); // Indicates if there is another page.
component.hasPrevious(); // Indicates if there is another page.
component.pageCount; // The number of pages available.
component.currentPage; // The current page of the component.
component.currentPage = 3; // Jump to the third page.
```

## Development

1. Install dependencies

    npm install

2. Start watching the typescript files

    npm run dev

3. Serve the development folder, so you can access `test.html` in a browser

    npx serve .

4. Open `localhost:5000/test.html` to view the file.
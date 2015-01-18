# Simple toggle spoiler

## Description

This is a very basic *Vanilla* **JavaScript** script whose the purpose is to toggle a spoiler by clicking on a `<button type="button"></button>` element.

## How to use it?

Your HTML syntax must follow the next one:
```html
  <div class="spoiler"><!-- Wrapper of the spoiler -->
      <button type="button" class="spoiler-button">Show spoiler</button> <!-- button to toggle the visibility of the spoiler-->
      <p class="spoiler-content">This is the spoiler!</p>
  </div>
```

If you change class names, you'll need to change them in the `spoiler.js` JavaScript file. Then, you juste need to add the previous JavaScript file.
```html 
  <script src="spoiler.js"></script>
```

## Interoperability

| Browsers                        | Versions |                    | 
|-------------------------------- |:--------:|--------------------|
| Google Chrome Canary            | 41.0     | :white_check_mark: |
| Google Chrome                   | 39.0     | :white_check_mark: |
| Firefox Developer Edition       | 36.0     | :white_check_mark: |
| Firefox                         | 35.0     | :white_check_mark: |
| Opera                           | 26.0     | :white_check_mark: |
| Safari                          | 5.1.7    | :white_check_mark: |
| Internet Explorer               | 11       | :white_check_mark: |
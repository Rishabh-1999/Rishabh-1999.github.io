# Coding Standards

## Naming Standards

---

|  Grouping  |                      | Standard               |
| :--------: | :------------------: | :--------------------- |
| File Names |                      |                        |
|            |        Folder        | Lower case             |
|            |        Files         | Camel case             |
|            |        Assets        | Lower case, allowed \_ |
|            |                      |                        |
|   React    | Functional component | Camel case             |
|            |   Class component    | Camel case             |

## Imports order

---

- React Exports Library
- Third Party Libraries
  - Styling Utils
  - Animation Libraries
  - \*\* Third Party Libraries
- Component Library ( MUI )
- Styles
- Components / Sections
- Context
- Utils
- Data
- Constants
- Assets
- Types
- Re-Export

## Types Rules

---

Make `interface` in case it will be used in multiple areas/files, or else use `type` if used in single file

## CSS Classnames (Including Tailwind CSS)

---

- content
- position
- display
- top, left, right, bottom
- width, height
- overflow
- snap
- scrollbar
- background
- group-\*
- margin
- padding
- border
  - border-width
  - border-style
  - border-color
- flex-\*
- flex center ( justify-center, items-center )
- space
- text-\*
  - text-size
  - text-transform
  - letter-spacing
- font-\*
  - font-weight
  - font-family
  - font-style ( italic )
- z-Index
- transform
- animation (delay)
- before:, after:
- Custom class-names

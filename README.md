# Image and Video Gallery Application

## Description

This application provides a user-friendly interface for viewing and interacting with a collection of images and videos. Users can view a larger displayed media item and select from a series of thumbnails below it to change the main media item. This application is designed for both desktop and mobile users, featuring responsive design that adapts to the screen size.

## Key Decisions

- **Frontend Technologies:** I chose to use plain HTML, CSS, and JavaScript for this project to keep it lightweight and to demonstrate fundamental web development techniques without reliance on libraries or frameworks.
- **Responsive Design:** Implemented custom CSS for responsiveness instead of using a framework like Bootstrap to have more control over the design elements and to reduce the application's overhead.
- **JavaScript for Interaction:** Decided against using libraries such as jQuery or frameworks like Vue.js to keep the project simple and it was also required in the information that I received for the assignment.

## How It Works

The application loads with a welcome page where you can choose two options. Either images och videos. You will get redirected one of those pages and the items will displayed in a main box and a horizontal row of thumbnails underneath. Clicking on any thumbnail will update the main display without reloading the page. This is achieved through JavaScript event listeners attached to each thumbnail.

For mobile users, the thumbnails become a scrollable carousel, allowing for a better user experience on smaller screens.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- You need to have a modern web browser installed (e.g., Chrome, Firefox, Safari).

### Installation

```bash
# Clone the repository
git clone https://github.com/TamiJessica-Rodriguez/kodtest-wasabiweb.git

# There are no dependencies to install, so you can simply open the HTML file in your browser
open welcomePage.html - Go Live
```

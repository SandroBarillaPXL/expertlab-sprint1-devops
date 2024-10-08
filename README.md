# expertlab-sprint1-devops
This repository serves as a PoC of GitHub Actions & DevOps

## App: EHB Super Complicated Calculator
This is a simple calculator app with some *unit.js* tests. Install the dependencies with `npm install` and then run the tests with `npm test`.
The frontend is a simple HTML file that uses the `script.js`and `functions.js` files to perform the operations. Run the frontend with a simple HTTP server of your choice, like the "live server" extension in Visual Studio Code.

## Docker
The app is also dockerized. You can build the image from the included `Dockerfile` with `docker build -t <your-tagname> .` and run it with `docker run -p [PORT]:80 <your-tagname>`. The app will be available at `http://localhost:[PORT]`.

## GitHub Actions
This repository has a GitHub Actions workflow that runs the tests on every push to the `main` branch. After the tests have run, another job is triggered to build the Docker image and push it to the GitHub Container Registry. You can check the workflow in the `.github/workflows` folder. Additionally, the workflow has a `workflow_dispatch` trigger that allows you to manually run the workflow from the GitHub Actions UI with customs inputs to use as a tag for the Docker image. Finally, a custom action is used to demonstrate how to create a reusable action that can be used in multiple workflows (see other repo).

## Watchtower
Watchtower is a tool that automatically updates the running Docker containers when a new image is pushed to the registry. A `docker-compose.yml` file is included in the repository that starts the app and the Watchtower containers. You can start the app with `docker-compose up -d` and then push a new image to the registry to see Watchtower in action.	When a new image is pushed, Watchtower will automatically pull it and restart the app container, also notifying you in the process.

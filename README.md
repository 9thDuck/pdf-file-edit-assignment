## Description

Simple pdf editor built using vanilla JS frontend consisting of pdf-lib, TailwindCSS and Nestjs backend, where you can fill pre-existing form inside PDF file.

Important: Saving functionality doesn't work. So it is incomplete as of now

## Setup

1. Clone the repo.

2. Create service account in Google Cloud, enable Google Drive with "Owner" permissions.

3. Get API key for that in JSON format, store it in root of the cloned repo.

4. Now you need to make .env file containing the following key value pair:

```shell
DATABASE_URL="postgresql://postgres:1234@localhost:5434/file_db?schema=public"
```

if you want to modify the individual parts of it, then you have to change the corresponding values also in the file "docker.compose.yml

## Running the app

When you're in the root of the repo, run

```bash
npm start
```

This command will spin up the db, make necessary installations and create the builds, copy the files and start the app,

App will be live at http://localhost:3001

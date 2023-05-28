## Description

> - A backend application that integrates different external services using Rest API,

    ExpressJS, TypeScript, and NodeJS.

<br />
<br />
<br />

## Setup

> - Run the following commands.

```bash
docker compose up --build -d
yarn install
yarn build
```

<br />

> - Create a `.env` file with the following variables.

```bash
MONGODB_URI=

MYSQL_HOST=localhost
MYSQL_PORT=3310
MYSQL_DATABASE=backend-nodejs
MYSQL_USER=root
MYSQL_PASSWORD=root
```

<br />
<br />
<br />

## API Endpoints | AWS S3

> - Upload a file.

```plaintext
HTTP Method: POST
URL: http://localhost:11000/api/default/s3/upload
Body (form-data):
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    file: File
```

<br />

> - Delete a file.

```plaintext
HTTP Method: POST
URL: http://localhost:11000/api/default/s3/delete
Body (form-data):
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    key: string
```

<br />

> - Get the signed URL of the file.

```plaintext
HTTP Method: GET
URL: http://localhost:11000/api/default/s3/url
Params:
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    key: string
```


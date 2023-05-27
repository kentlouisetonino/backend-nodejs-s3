## Description

> - A backend application that allows to test your AWS S3 bucket with NodeJS.

> - The following features below are implemented are: `upload a file`, `delete a file`, and

    `get the signed URL of the file`.

> - Amazon S3: https://aws.amazon.com/s3/

> - SDK V3: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/migrating-to-v3.html

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

## API Endpoints for AWS S3

> - Upload a file.

```plaintext
HTTP Method: POST
URL: http://localhost:11000/api/s3/upload
Body (form-data):
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    file: File
```

> - Delete a file.

```plaintext
HTTP Method: POST
URL: http://localhost:11000/api/s3/delete
Body (form-data):
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    key: string
```

> - Get the signed URL of the file.

```plaintext
HTTP Method: GET
URL: http://localhost:11000/api/s3/url
Params:
    bucketName: string
    bucketRegion: string
    bucketAccessKeyId: string
    bucketSecretAccessKey: string
    key: string
```

> - Testing for endpoints.

https://user-images.githubusercontent.com/69438999/217460437-453a250e-9770-42de-8eb6-0f015c378e65.mp4

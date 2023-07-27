# Tokopedia Play Clone (BE)

A Tokopedia Play API Clone as Generasi GIGIH 3.0 Mid Term Project Fullstack Engineering Track

## Database Structure
![image](https://github.com/jasonk19/mid-term-project-gigih/assets/69589003/5730db59-8cb8-4e5e-b785-983868788bc8)

## API Structure
- Non Account APIs
```
request -> controller -> useCase -> database -> response
```
- Account APIs
```
request -> middleware -> controller -> useCase -> database -> response
```

## API Contract
### Account
- User Object
```
{
  _id: objectId,
  name: string,
  password: string,
  createdAt: datetime,
  updatedAt: datetime
}
```

### POST /account/register

### POST /account/login
---
  Login user
* **URL Params**  
  None
* **Data Params**  
  ```
  {
    username: <string>,
    password: <string>
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  message: <string>
  token: <string>
}
```

### Video Thumbnail
- Video Thumbnail Object
```
{
  _id: objectId,
  url: string,
  createdAt: datetime,
  updatedAt: datetime
}
```

### GET /videos
---
  Return all video thumbnail list
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  [
    { <videoThumbnail-object> },
    { <videoThumbnail-object> },
    { <videoThumbnail-object> }
  ]
}
```


### Product
- Product Object
```
{
  _id: objectId,
  title: string,
  price: number,
  link: string,
  videoId: objectId,
  createdAt: datetime,
  updatedAt: datetime,
}
```

### GET /product
---
  Return all products based on video id
* **URL Params**  
  None
* **Data Params**  
  ```
  {
    videoId: <string>
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  [
    { <product-object> },
    { <product-object> },
    { <product-object> }
  ]
}
```

### Comment
- Comment Object
```
{
  _id: objectId,
  accountId: objectId,
  comment: string,
  timestamp: datetime,
  videoId: objectId
}
```

### GET /comment
---
  Return all comments based on video id with populated account data
* **URL Params**  
  None
* **Data Params**  
  ```
  {
    videoId: <string>
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  [
    { <comment-object> },
    { <comment-object> },
    { <comment-object> }
  ]
}
```

### POST /comment
---
  Add comment according to the video id
* **URL Params**  
  None
* **Data Params**  
  ```
  {
    videoId: <string>
    comment: <string>
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  status: <string>,
  message: <string>
}
```

## Installation
```
  git clone https://github.com/jasonk19/mid-term-project-gigih.git
```

## How to Run
1. Clone the repo based on the command in `Installation`
2. Install required modules
    ```
    npm install
    ```
3. Create `.env` file based on `.env.example`
4. Seed Video Thumbnails and Products data by running the seed command.
    ```
    npm run db:seed
    ```
5. Run the application
    ```
    npm run dev
    or
    npm run start
    ```

## Author
Jason Kanggara
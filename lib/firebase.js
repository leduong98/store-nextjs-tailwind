import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  "type": "service_account",
  "project_id": "store-project-387504",
  "private_key_id": "1d23b8bb724ca05f023d3eb7e9addb129ee5b1ac",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCj99XjhMXi5yk8\nDSw6Yfssugrz5j7Nv26coDyMWIOj+OFx7niFg2H+eMP6apzzFoSxVrjbeSNIG1er\nmTlP0MlFkNhAnYzNY299q4QYG3MOEq/LWuKJ6LMDFkCv8uOHN92B3BkWHuR1XTNm\nsH4Qo9Y/HCV0qEG8FoX8QjIbyKrCAqEhZlfckboEGYbfYkL/5LzytRVEXl0flP3b\nv6bnKWUXeSJTfiZmbCsgFqVOhD9l/qdCw0e98VyVwl6pq1x6ECOb2PufWF3gI0Oq\nv1XFYXEq3lYx+Z/OQOxxXTtQ4CQaHA0cR2Al9blRUvzILKfmS8lXcpxUiDxHzs+R\nbFF8Lx59AgMBAAECggEAHHRM1N/cq2SsHjS3ASaxvPBIKE1Dhtb6rgmMmFpf9duh\n2/CjT6AeKFfywokv1WuJ+XBwQf4CpmfAThIYBQbZds4NCSGOJrJjza4vDTPuQnnx\nsduCxqXwMs/wx9fhrjx+nyN/4vvXb5qN6fsk1WRpMKiEw3rTdX1/IOin43RuVZ5y\nETEGyb3gTP0ns7jvr+Die2731CZ9ekEFiKZ63IM7/Rl7z8xiOf7AzYeXkdaDI44b\nKdKhkMpmAwdqSCm9TRzcmAZOqEjcZEHRWQ7nLk2XD4nFuWSr66S0SQ/kFMM55m1/\n5DuQREsnG1jdtR3q2gRKYgtZr30oOwqKA4fBGyeigQKBgQDRo0u1FPpMUDoMPe9d\n+YiJE3DaX/cermSTvDigiUySu1ve7YLpSGTld6+M0pVz+jCkMWPlzUuwaaZmsbmY\njJfncg6rf4IWiaNqIfh/4vbngr/q97yd1eMgjRGKPCpmAMf/4Go/sVfLNyG2u9iQ\n+GhW3eSG24aLbh1aW02jicRH4QKBgQDIOu8JFx/+DwxqM5aboC1I6Uusvgo+RJBs\nEPxsMxesMuONEMGXaqxtsh4vbx+BblfA78sJWxhc1uD8ozIhxdlv+4kcOgyC32tx\nS7m1BBhwA/vQ4F8lwMyLaE9EewfuoxmFGkq8j9JHLvgktkiFOh/xjj9IzEAGm16k\n88/tVeo6HQKBgQC6zukH1Em290bC4e4Lr/EbNVe7QQjVLlIx0+giJjc2Cf80CDI/\n72L5mE23D3BeiPQPXHPIs8hey8acfIMGjUJP3DN2X4lsy/ny+ZKXY4jhhIHAwEIz\n5AUhXJPkuviNLOUL/s6vMzkovVgtnfa+OJ3Byrl58uVSGi3N9s6YjIt8AQKBgAQ2\nkT8MuISdBnLZoQqnRSyqlAgPe6GxyaQse1M/g/kAnR8jwh8QhI5OWCpBWVVc4AXU\nRd5th0a00skeGfjx89BSZ6Era4X5c4ZPxJmVe3on602K2xWtR+CLElfritAvqGLP\nmdD76b3LtDb5iu8auP9ZMeWzPomlDUnFQ5PH4gTVAoGATwQG7/lAAAJqj9lVEHnz\no0jbyGwDc1isFAa3OKx39CQZzLgawz3me5N+pyep/c0DOzO0tD+no9a3xLPMBLTs\ncTZsTrv4VrwrSx6ZSz8FHNra5GIggMUTwndb3yMVcj63CyM5Zsk+drMC9Vm5cy31\n+V4lcS2UA6KS9OIsIIHpA8I=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-cx6zo@store-project-387504.iam.gserviceaccount.com",
  "client_id": "104625754692280731932",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cx6zo%40store-project-387504.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

export { storage };

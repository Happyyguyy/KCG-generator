'use strict'

const Env = use('Env')

/*
 |--------------------------------------------------------------------------
 | Firebase
 |--------------------------------------------------------------------------
 |
 | Provide details of firebase project
 |
 */

module.exports = {

  /*
   |--------------------------------------------------------------------------
   | Firebase Admin credentials key file
   |--------------------------------------------------------------------------
   */
  credential: {
    type: Env.get('FIREBASE_CREDENTIAL_TYPE'),
    project_id: Env.get('FIREBASE_CREDENTIAL_PROJECT_ID'),
    private_key_id: Env.get('FIREBASE_CREDENTIAL_PRIVATE_KEY_ID'),
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDvb2T/a1QuSnhJ\n37N917Kym8BVMaWzYhHP+QCEy8XrJyp3btVvAbW5UzbLZcAa2qhwMleW4fWKQlAw\n9Vezy8xhEeJs/05vd60MH0I2U5avhdd7N9F6lqvyObVXcMIao66+W3XLEkbgPKtG\nZi/DUA0rRWfnlCDzGaYxt/+0/zX9DOEz6dNndxz3GC6B1GyprMR8x7ul9/DPtPuS\nSbt8mmANVhIlSKf3aWBF+Ptk0WHbCqEBCU2urNhYX7wyxoMPjqbEv6tx9oZhBQJM\ntkDbrhKY2t6fVhXhKPVxAefgd/KjPAyAlbFfPKDrdl5cUtXqcsrXDTtIWon6gC4x\nbU4xYXCNAgMBAAECggEADEwSafDd+wj9mmkIFlxBPrLzovHWErtkcqPqrtIAFAFS\ns8gdjkzjmQVTq4jKCpxffsWtzHTF+t1y3L+DtdsEypkpIdPPTY0eC4uWcmUCzfh9\nNkRKDgurgJkN/dPvetVHHgU4rJ7qGiMGNpXRzwGZ74vqF9F6i2nDk0r3MdlSsUXs\n4rllBVRBwxW8ER7Luhyi7d30RkUJM0doj/ZHxJykPG7SHAGoIozoLV78Q4WoBZF2\nXbt3jiUC6B/oX18ZyJmjMURs1yqP6+NtOvGDqVFxK8RrXABLivbnVPv6S2v9O0sY\n9viALOm1KzfgsFOuveO0TFUOphcj7fnviqx1EKgW8QKBgQD71rmeDJUySdh9MtEf\nfsg1ZR+BCGsmTOAz4fzF4MRPtKjBHEzYwOLGWzD1raAUu56jb3ePiyLynn0VgKe4\nLumeNDQ+sfwENn/HeEn/K7eO2xOgUOx5P05t1+xI5b0vKpONviAZCcKYfFmN0BTP\nDY0h9RJ8btzJMaKwrcUliOkofQKBgQDzZDPFUcKK894YHC+VlJVxwNqS8CYsjkG5\nXkKfoo+3fndqIlwkr06GHwuQHnIHREj9j2bWb84+MeQvZ7uQnzd4g7HemYBXoP8T\nd7xXrjFvFRc2qy1XC83x89wYPx1O+b7XrVzVeI3SCKxsPTD4t5uv0FOK/913/Vke\nbC/qDgz1UQKBgEIZJJS/9rTBPwn1OYALtZ6WEQO74uulh772VHLXQI8u+o/czqqh\nTaQEMUB6Nqbaa5O34OiS+zQ0tt3a66pi3bxBNWkzK9MrPrRq9Pj9T2s2Qtt0Aez8\n2afo4UJs0g+8HAg624/WyPVexd57u8pwYxeDjDuOmXJRDcNTiIgGfDO9AoGBAImv\ne6H6OIWGo3McLsb9gPUS1hMdi1rVNtT4P9Qyj/6Lql3+BgYyrccttMrYjkUSGgBm\nqRRRt2hzrNQsaGzNxQGF7o8wYuwvhVyr9X3cataeJb2lZEbDxMNE4pNM0PWmTpGP\n3t5cDk5s3a11iEiLBaWVwkz1pYGFbm7JYOmU/TuhAoGAS4E59ZMWZwAR6I9tPtlp\nGXMCI1p75xG7EmYyhAGSvvLxcqRItz0/L3d7ollbo7VQyQXY55Wj2WQekriCPL5m\ndU4CNp9nYENhG1TJremf+nc7DYcfvEbRsGYhAElIHm31aQIMi7fQtZUS2bVpCLIM\nRXpzNQPWPCopQ7WaPA6iCO0=\n-----END PRIVATE KEY-----\n",
    client_email: Env.get('FIREBASE_CREDENTIAL_CLIENT_EMAIL'),
    client_id: Env.get('FIREBASE_CREDENTIAL_CLIENT_ID'),
    auth_uri: Env.get('FIREBASE_CREDENTIAL_AUTH_URI'),
    token_uri: Env.get('FIREBASE_CREDENTIAL_TOKEN_URI'),
    auth_provider_x509_cert_url: Env.get('FIREBASE_CREDENTIAL_AUTH_PROVIDER'),
    client_x509_cert_url: Env.get('FIREBASE_CREDENTIAL_CLIENT')
  },
  /*
   |--------------------------------------------------------------------------
   | API key
   |--------------------------------------------------------------------------
   */
  apiKey: Env.get('FIREBASE_API_KEY'),
  /*
   |--------------------------------------------------------------------------
   | Auth
   |--------------------------------------------------------------------------
   */
  authDomain: Env.get('FIREBASE_AUTH_DOMAIN'),
  /*
   |--------------------------------------------------------------------------
   | Database
   |--------------------------------------------------------------------------
   */
  databaseURL: Env.get('FIREBASE_DATABASE_URL'),
  /*
   |--------------------------------------------------------------------------
   | Hosting
   |--------------------------------------------------------------------------
   */
  storageBucket: Env.get('FIREBASE_STORAGE_BUCKET')

}

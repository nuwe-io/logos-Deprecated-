# NUWE LOGOS API

**DEPRECATED --> CHECK technologies repo**

API que contiene una lista de diferentes tecnologías del sector sofware.

## Install

```shell
npm i @nuwe/logos
```

o clonalo utilizando: 

```shell
git clone https://github.com/nuwe-io/logos
```

## Usage

API Documentation: [logos.nuwe.io](https://logos.nuwe.io)
Para utilizar la API: 

```javascript

// Para utilizar con axios:
import axios from "axios"

const baseURL = "https://logos.nuwe.io/"
const logoFileName = "azure.png"


const azureLogo = () => axios.get(baseURL/logoFileName)


```

### Update de la documentación: 

ejecutar desde el root folder:

```shell
apidoc -i src/ -o public/
```


### Contribute

In progress


## Contact info 

Podéis poneros en contacto a través de linkedin:

[Edgar Gago Carrillo](https://www.linkedin.com/in/gagocarrilloedgar/)

o a través de:

> hello@nuwe.io

## Licence 

[MIT](https://opensource.org/licenses/MIT)

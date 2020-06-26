# Ryde

Ryde is a fully open source Level 2 self driving agent that works on your Android or iOS phone. Built using React Native.

## Installation for developers

```
git clone https://github.com/aryanmisra/ryde/
cd ryde/rydeapp
```
```
npm i -s
expo start
```

## Developments in progress

### App
 - Stream image data to Flask backend.
### Self-driving Agent
 - Use [Instance Segmentation Lanenet](https://arxiv.org/abs/1802.05591) implemented by [Maybeshewill-CV](https://github.com/MaybeShewill-CV/lanenet-lane-detection) and modify it to accept image stream. Record time cost on gpu inference.
### Hardware Module
 - Send/receive data through LKAS CAN bus

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Major Contributers
[Aryan Misra](https://github.com/aryanmisra/)
[Waris Zahoor](https://github.com/warisz/)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

### [0.0.0] - 2020-06-25
#### Added (repo public date)
- App home page, with snack bar
- Camera feed implementation with static objects

#### Changed
- N/A

#### Removed
- N/A

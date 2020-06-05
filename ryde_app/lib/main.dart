import 'package:flutter/material.dart';
import 'dart:async';
import 'package:camera/camera.dart';

List<CameraDescription> cameras;

Future<void> main() async{
  cameras = await availableCameras();
  runApp(RydeOne());
}

class RydeOne extends StatefulWidget{
  @override
  _RydeCamState createState() => _RydeCamState();
}

class _RydeCamState extends State<RydeOne>{
  CameraController controller;

  @override
  void initState(){
    super.initState();
    controller = CameraController(cameras[0], ResolutionPreset.medium);
    controller.initialize().then((_) {
      if (!mounted){
        return;
      }
      setState(() {});
    });
  }

  @override
  void dispose() {
    controller?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context){
    if (!controller.value.isInitialized){
      return Container();
    }
    return AspectRatio(
      aspectRatio: controller.value.aspectRatio,
      child: CameraPreview(controller));
  }
}

import CallLogs from 'react-native-call-log'
import {PermissionsAndroid} from 'react-native';

module.exports = async (taskData) => {
    // do stuff
    alert('Task Backgroud Run')
     async function  requestCallLogPermission () {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Spy App needs access to your call logs" +
            "so you can read call logs",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the logs");
        CallLogs.load(5).then(c=>console.log(c))
      
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
    console.log(taskData)
    setInterval(async ()=>{
        console.log('Task Backgroud Run')
       //await  requestCallLogPermission()
    },5000)
    console.log('Task Run')
  };
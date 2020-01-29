class Accelerometer{
	constructor(){
		this.x=0,this.y=0,this.z=0;
		this.SERVICE_UUID='e95d0753-251d-470a-a062-fa1922dfa9a8';
		this.CHAR_UUID='e95dca4b-251d-470a-a062-fa1922dfa9a8';
	}
	async connect(server){
		const service=await server.getPrimaryService(this.SERVICE_UUID);
		const characteristic = await service.getCharacteristic(this.CHAR_UUID);
		await characteristic.startNotifications();
		characteristic.addEventListener('characteristicvaluechanged',
			evt=>{
				this.x=(evt.target.value.getInt16(0,true))/5;
				this.y=(evt.target.value.getInt16(2,true))/-5;
				this.z=(evt.target.value.getInt16(4,true))/5;
			}
		)
	}
};

const Microbit=class{
	constructor(){
		this.accelerometer=new Accelerometer;
		this.device=null,this.server=null;
	}
	get services(){ return [this.accelerometer]; }
	get services_uuid(){ return this.services.map(service=>service.SERVICE_UUID); }
	async connect(resolver,rejecter){
		try{
			this.device=await navigator.bluetooth.requestDevice({
				filters: [{
					namePrefix: 'BBC micro:bit',
				}],
				optionalServices: this.services_uuid,
			});
			this.server=await this.device.gatt.connect();
			//console.log(this.server)
			await this.accelerometer.connect(this.server);
			resolver();
		}catch(e){rejecter(e);}

	}
}

// root.system.setupper['microbit']=(resolver,rejecter)=>{
//   root._microbit=new Microbit;
//   const btn=root.button.create('接続');
//   btn.setAction(()=>root._microbit.connect(resolver,rejecter));
// }
// console.log(root.system.setupper);
// window.microbit=new Microbit;
// const connect=()=>new Promise((resolve,reject)=>{
//   microbit.connect(resolve,reject);
// });
// const start=async ()=>{
//   await connect();
//   setInterval(()=>{
//     console.log(microbit.accelerometer.x);
//   },100)
// }
// $("#connect").click(start);

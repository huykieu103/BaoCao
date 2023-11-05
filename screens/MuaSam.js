import React from "react";
import { SafeAreaView, StyleSheet, View, Text,Image,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Background from "./Backgound";

const MuaSam=()=>{
  return(
   
      <View style={styles.container}>
        <Background/>
      <View>
        
        <Icon name="cart-outline" size={30} color="black" style={styles.cart}/>
          <View style={styles.textContainer}>
           <Text style={styles.text}>Giao hàng tới {'\n'}
              <Text style={{fontSize:'12',fontWeight:'not bold'}}>
                  Bạn chưa có địa chỉ giao hàng!                                                <Icon name="chevron-forward-outline" size={30} color="white" />
              </Text>
           </Text>
        
          </View>
          <View style={styles.textone}>
            <View style={styles.row}>
              <View style={styles.column}>
                   <Icon style={{paddingLeft:10}} name="search" size={30} color="#B31E8D" />
                   <Text style={{paddingTop:5,}}>Tìm kiếm</Text>
              </View>
              <View style={styles.column}>
                   <Icon style={{paddingLeft:15}} name="apps-outline" size={30} color="#B31E8D" />
                   <Text style={{paddingTop:5}}>Danh mục</Text>
              </View>
              <View style={styles.column}>
                   <Icon style={{paddingLeft:15}} name="heart-outline" size={30} color="#B31E8D" />
                   <Text style={{paddingTop:5}}>Yêu thích</Text>
              </View>
              <View style={styles.column}>
                   <Icon style={{paddingLeft:15}} name="newspaper-outline" size={30} color="#B31E8D" />
                   <Text style={{paddingTop:5}}>Đơn hàng</Text>
              </View>
           </View>
           </View>
           </View>
           <ScrollView>
            <View>
           <View style={styles.contentView}>
              <Text style={{ marginTop: 50, paddingRight:150, fontSize:'18'}}>SỐNG XANH ĐẬM CHẤT RIÊNG</Text>
              <View style={styles.contentView1}>
                <Image source={require('../assets/songxanhdamchatrieng.jpg')} style={{width: '100%', height:'80%'}}/>
                <Text style={{padding: 15,fontSize:16,fontWeight:'bold'}}>Đang diễn ra</Text>
              </View>         
           </View>
           <View>
             <Text style={{ marginTop: 50, paddingRight:150,fontSize:18,fontWeight:'bold'}}>Cẩm nang mua sắm</Text>
             <View style={styles.contentView2}>
                <Image source={require('../assets/camnangmuasam.jpg')} style={{width: '100%', height:'80%'}}/>
                <Text style={{padding: 15,fontSize:16,fontWeight:'bold'}}>[Cẩm nang mua sắm số 201- Miền Bắc]
                  {'\n'}<Text style={{fontSize:13,fontWeight:'notbold'}}>Chào mừng ngày phụ nữ Việt Nam</Text>
                </Text>
              </View>  
           </View>
           <View style={styles.contentView3}>
              <Text style={{fontSize:'18',fontWeight:'bold'}}>Top sản phẩm bán chạy</Text>
              <ScrollView  horizontal={true}> 
                <View style={styles.product1}>
                    <Image source={require('../assets/hau.jpg')} style={{ aspectRatio: 9 / 11, marginLeft:10}}/>
                    <Icon name="heart-outline" size={30} color="black" style={styles.iconproduct}/>
                    <Text style={{fontSize:'17'}}>Hàu sữa Thái Bình Dương(Nguyên Con){'\n \n'}
                        <Text style={{color:'gray',fontSize:14}}>Đơn vị: 100g {'\n\n'}
                            <Text style={{color:"#B31E8D", fontSize:'17',fontWeight:'bold'}}>3.000đ</Text> 
                            
                        </Text>
                    </Text>
                    <View style={{width: 140,height: 40,backgroundColor:"#B31E8D", marginLeft:15,marginTop: 20,borderRadius: 10}}>
                      <Text style={{color:'white' , paddingTop: 10,paddingLeft: 5 }}>Thêm vào giỏ hàng</Text>
                    </View>
                </View>
                <View style={styles.product2}>
                    <Image source={require('../assets/caingot.jpg')} style={{ aspectRatio: 9 / 11, marginLeft:10}}/>
                    <Icon name="heart-outline" size={30} color="black" style={styles.iconproduct}/>
                    <Text style={{fontSize:'17'}}>CẢI NGỌT 300G ORGANIC{'\n \n'}
                        <Text style={{color:'gray',fontSize:14}}>Đơn vị: sản phẩm {'\n\n'}
                            <Text style={{color:"#B31E8D", fontSize:'17',fontWeight:'bold'}}>20.000đ</Text>
                        </Text>
                    </Text>
                    <View style={{width: 140,height: 40,backgroundColor:"#B31E8D", marginLeft:15,marginTop: 20,borderRadius: 10}}>
                      <Text style={{color:'white' , paddingTop: 10,paddingLeft: 5 }}>Thêm vào giỏ hàng</Text>
                    </View>
                </View>
                <View style={styles.product2}>
                    <Image source={require('../assets/raumuong.jpg')} style={{  aspectRatio: 9 / 11, marginLeft:10}}/>
                    <Icon name="heart-outline" size={30} color="black" style={styles.iconproduct}/>
                    <Text style={{fontSize:17}}>RAU MUỐNG 300G ORGANIC{'\n \n'}
                        <Text style={{color:'gray',fontSize:14}}>Đơn vị: sản phẩm {'\n\n'}
                            <Text style={{color:"#B31E8D", fontSize:17,fontWeight:'bold'}}>20.000đ</Text>
                        </Text>
                    </Text>
                    <View style={{width: 140,height: 40,backgroundColor:"#B31E8D", marginLeft:15,marginTop: 20,borderRadius: 10}}>
                      <Text style={{color:'white' , alignSelf:'center',paddingTop:10}}>Thêm vào giỏ hàng</Text>
                    </View>
                </View>
                <View style={styles.product2}>
                    <Image source={require('../assets/canhga.jpg')} style={{ aspectRatio: 9 / 11, marginLeft:10}}/>
                    <Icon name="heart-outline" size={30} color="black" style={styles.iconproduct}/>
                    <Text style={{fontSize:17}}>CÁNH GÀ TORI PHAN 800G {'\n \n'}
                        <Text style={{color:'gray',fontSize:14}}>Đơn vị: 800g {'\n\n'}
                            <Text style={{color:"#B31E8D", fontSize:17,fontWeight:'bold'}}>76.000đ</Text>
                        </Text>
                    </Text>
                    <View style={{width: 140,height: 40,backgroundColor:"#B31E8D", marginLeft:15,marginTop: 20,borderRadius: 10}}>
                      <Text style={{color:'white' , paddingTop: 10,paddingLeft: 5 }}>Thêm vào giỏ hàng</Text>
                    </View>
                </View>
                <View style={styles.product2}>
                    <Image source={require('../assets/catrung.jpg')} style={{ aspectRatio: 9 / 11, marginLeft:10}}/>
                    <Icon name="heart-outline" size={30} color="black" style={styles.iconproduct}/>
                    <Text style={{fontSize:17}}>CÁ TRỨNG CAPELIN FROZEN 500G {'\n \n'}
                        <Text style={{color:'gray',fontSize:14}}>Đơn vị: 500g {'\n\n'}
                            <Text style={{color:"#B31E8D", fontSize:17,fontWeight:'bold'}}>99.000đ</Text>
                        </Text>
                    </Text>
                    <View style={{width: 140,height: 40,backgroundColor:"#B31E8D", marginLeft:15,marginTop: 20,borderRadius: 10}}>
                      <Text style={{color:'white' , paddingTop: 10,paddingLeft: 5 }}>Thêm vào giỏ hàng</Text>
                    </View>
                </View>
              </ScrollView>
           </View>       
           </View>
           <View style={{width:300, height:50,backgroundColor:"#B31E8D",alignSelf:'center',paddingTop: 15, borderRadius: 10}}>
              <Text style={{alignSelf:'center',color:'white'}}> 
                    XEM THÊM DANH MỤC KHÁC
              </Text>
           </View>
           </ScrollView>
      </View>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  cart:{
    position: 'absolute',
    top:10,
    right:0,
    color:'white'
  },
  textContainer: {
    position: 'absolute',
    top: 70,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Đảm bảo chữ có độ ưu tiên cao hơn background
   
  },
  text: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 15,
    width: 400,
    height:80,
    borderWidth:1,
    borderRadius:10,
    color: 'white',
    fontWeight: 'bold',
    paddingTop:15,
    paddingLeft: 10,
    
  },
  textone: {
    marginTop: 190,
    fontSize: 15,
    width: 400,
    height:110,
    borderWidth:1,
    borderRadius:10,
    borderColor:'white',
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Màu bóng (rgba)
    shadowOffset: { width: 0, height: 5 }, // Độ dịch chuyển của bóng (width, height)
    shadowOpacity: 1, // Độ mờ của bóng (0-1)
    shadowRadius: 4, // Bán kính của bóng
    backgroundColor:'white',
    flexDirection: 'column',
 
  },
  row: {
    flex:1,
    flexDirection: 'row',
  },
  column: {
    flex:1,
    paddingTop:30,
    paddingLeft:20,

  },
  contentView:{
     alignSelf:'center'
  },
  contentView1:{
    marginTop: 30,
    width: 400,
    height: 250,
    borderWidth:1,
    borderRadius:10,
    borderColor:'white',
    shadowColor: 'rgba(0, 0, 0, 0.5)', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 1,
    shadowRadius: 4, 
    backgroundColor:'white',
    alignSelf:'center'
  },
  contentView2:{
   marginTop: 30,
   width: 410,
   height: 380,
   borderWidth:1,
   borderRadius:10,
    borderColor:'white',
    shadowColor: 'rgba(0, 0, 0, 0.5)', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 1,
    shadowRadius: 4,
    backgroundColor:'white',
    alignSelf:'center'
  },
  contentView3:{
    marginTop: 100
  },
  product1:{
    width: 180,
    height: 370,
    marginTop: 20,
    borderWidth:1,
    borderColor:'white',
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Màu bóng (rgba)
    shadowOffset: { width: 0, height: 5 }, // Độ dịch chuyển của bóng (width, height)
    shadowOpacity: 1, // Độ mờ của bóng (0-1)
    shadowRadius: 4, // Bán kính của bóng
    backgroundColor:'white',
  },
  iconproduct:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  product2:{
    marginLeft:20,
    width: 180,
    height: 370,
    marginTop: 20,
    borderWidth:1,
    borderColor:'white',
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Màu bóng (rgba)
    shadowOffset: { width: 0, height: 5 }, // Độ dịch chuyển của bóng (width, height)
    shadowOpacity: 1, // Độ mờ của bóng (0-1)
    shadowRadius: 4, // Bán kính của bóng
    backgroundColor:'white',
  },
})
export default MuaSam;
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Khac = () => {
  return (
    <View style={styles.container}>
       <View style={styles.account}>
            <View style={styles.iconAccount}>
                <Icon name='user-circle-o' size={60}/>
            </View>
            <View style={styles.contentAccount}>
                <Text style={{fontSize: 20}}> KIỀU VĂN HUY</Text>
                <Text>Xem thông tin tài khoản</Text>
            </View>
       </View>
       <View style={styles.contentKhac}>
              <View style={styles.content_left}>
                  <Icon name='map' size={30} color={"#B31E8D"}/>
              </View>
              <View style={styles.content_right}>
                      <Text style={{fontSize: 16}}>Đường tới AEON</Text>                     
              </View>
              <View style={styles.icon_check1}>
                    <Icon name='angle-right' size={20}/>     
              </View>
       </View>
       <View style={styles.hr} />
       <View style={styles.contentKhac}>
              <View style={styles.content_left}>
                  <Icon name='eercast' size={30} color={"#B31E8D"}/>
              </View>
              <View style={styles.content_right}>
                      <Text style={{fontSize: 16}}>AEON Channel</Text>                     
              </View>
             
       </View>
       <View style={styles.hr} />
       <View style={styles.contentKhac}>
              <View style={styles.content_left}>
                  <Icon name='volume-control-phone' size={30} color={"#B31E8D"}/>
              </View>
              <View style={styles.content_right}>
                      <Text style={{fontSize: 16}}>Trợ giúp</Text>                     
              </View>
              <View style={styles.icon_check2}>
                    <Icon name='angle-right' size={20}/>     
              </View>
             
       </View>
       <View style={styles.hr} />
       <View style={styles.contentKhac}>
              <View style={styles.content_left}>
                  <Icon name='list-alt' size={30} color={"#B31E8D"}/>
              </View>
              <View style={styles.content_right}>
                      <Text style={{fontSize: 16}}>Khảo sát</Text>                     
              </View>
             
       </View>
       <View style={styles.hr} />
       <View style={styles.contentKhac}>
              <View style={styles.content_left}>
                  <Icon name='share-alt' size={30} color={"#B31E8D"}/>
              </View>
              <View style={styles.content_right}>
                      <Text style={{fontSize: 16}}>Mời bạn bè</Text>                     
              </View>
             
       </View>
       <View style={styles.hr} />
       <View style={styles.contentKhac}>
              <View style={styles.content_left}>
                  <Icon name='address-book-o' size={30} color={"#B31E8D"}/>
              </View>
              <View style={styles.content_right}>
                      <Text style={{fontSize: 16}}>Thông tin pháp lý</Text>                     
              </View>
             
       </View>
       <View style={styles.hr} />
       <View style={styles.contentKhac}>
              <View style={styles.content_left}>
                  <Icon name='asl-interpreting' size={30} color={"#B31E8D"}/>
              </View>
              <View style={styles.content_right}>
                      <Text style={{fontSize: 16}}>Những dịch vụ của AEON</Text>                     
              </View>
              <View style={styles.icon_check3}>
                    <Icon name='angle-right' size={20}/>     
              </View>
             
       </View>
       <View style={styles.hr} />
       <View style={styles.contentKhac}>
              <View style={styles.content_left}>
                  <Icon name='history' size={30} color={"#B31E8D"}/>
              </View>
              <View style={styles.content_right}>
                      <Text style={{fontSize: 16}}>Lịch sử điểm</Text>                     
              </View>
              <View style={styles.icon_check4}>
                    <Icon name='angle-right' size={20}/>     
              </View>
             
       </View>
       <View style={styles.hr} />
       <View style={styles.contentKhac}>
              <View style={styles.content_left}>
                  <Icon name='ticket' size={30} color={"#B31E8D"}/>
              </View>
              <View style={styles.content_right}>
                      <Text style={{fontSize: 16}}>Tích điểm mua sắm</Text>                     
              </View>
              <View style={styles.icon_check5}>
                    <Icon name='angle-right' size={20}/>     
              </View>
             
       </View>
       <View style={styles.hr} />
       <View style={styles.contentKhac}>
              
              <View style={styles.content_left}>
                  <Icon name='history' size={30} color={"#B31E8D"}/>
              </View>
              <View style={styles.content_right}>
                      <Text style={{fontSize: 16}}>Lịch sử điểm mua sắm</Text>                     
              </View>
              <View style={styles.icon_check6}>
                    <Icon name='angle-right' size={20}/>     
              </View>
             
       </View>
     
    </View>
  );
};

const styles = StyleSheet.create({  
  container: {
    flex: 1,
   
  },
  account:{
    flexDirection:'row'
  },
  iconAccount:{
    marginHorizontal: 20,
    marginTop: 40
  },
  contentAccount:{
    marginTop: 50
  },
  contentKhac:{
    flexDirection:'row'
  },
  content_left:{
    marginHorizontal: 30,
    marginTop: 10
  },
  content_right:{
    marginTop: 15
  },
  icon_check1:{
    marginTop: 16,
    marginLeft: 180
  },
  icon_check2:{
    marginTop: 16,
    marginLeft: 240
  },
  icon_check3:{
    marginTop: 16,
    marginLeft: 105
  },
  icon_check4:{
    marginTop: 16,
    marginLeft: 205
  },
  icon_check5:{
    marginTop: 16,
    marginLeft: 150
  },
  icon_check6:{
    marginTop: 16,
    marginLeft: 130
  },

  hr: {
    marginTop:20,
    width:'100%',
    borderBottomColor: "#D6D0D0",
    borderBottomWidth: 1.5,
    
  },
}); 

export default Khac;
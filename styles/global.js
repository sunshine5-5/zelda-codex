import colors from "./colors";

export default {
  page:{
    flex:1,backgroundColor:colors.primaryLight,paddingHorizontal:20,paddingTop:20
  },
  title:{
    fontSize:28,fontWeight:"700",textAlign:"center",color:colors.dark
  },
  line:{
    width:"60%",height:2,backgroundColor:colors.dark,alignSelf:"center",
    marginTop:8,marginBottom:25,opacity:0.4
  },
  image:{
    width:"100%",
    height:250,
    resizeMode:"contain",
    marginBottom:20
  },
  description:{
    fontSize:15,color:colors.dark,lineHeight:22,marginBottom:12
  },
  label:{
    fontSize:16,fontWeight:"700",color:colors.dark,marginTop:10
  }
};

// import React, { useState } from "react";
// import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
// import { materialTheme } from "../constants";
// import { Block, theme, Text, Button } from "galio-framework";
// import { FlatList } from "react-native-gesture-handler";
// import BlankData from "../components/custom/BlankData";
// import Spacer from "../components/custom/Spacer";
// import MoreOrLessModal from "../components/MoreOrLessModal";
// import AppWrapper from "../components/custom/AppWrapper";

// const SalesHistory = (props) => {
//   const { navigation } = props;
//   const [modaldescription, setmodaldescription] = useState("");
//   const [showMoreLessModalDescription, setshowMoreLessModalDescription] = React.useState(false);
//   const readMore = (Remarks) => {
//     setshowMoreLessModalDescription(true);
//     setmodaldescription(Remarks);
//   }
//   const expandContent = (reason) => {
//     setshowMoreLessModalDescription(true);
//     setmodaldescription(reason);
//   }
//   const data = [
//     {
//       Dateandtimeofupdate: "21/03/17 20:16",
//       applicationStatus: "Under Review",
//       salesstatus: "Approved",
//       username: "JAY6201",
//       Dateandtimeofnextaction: "23/04/17 03:00",
//       Remarks: "Alma's encouraging remarks to her son about his superb sandwich making skills gave",
//       lastModifiedBy: "Assistant Manager",
//       reason: "Form incomplete and Image mismatch with the ekyc document",
//     },
//     {
//       Dateandtimeofupdate: "21/03/17 20:16",
//       applicationStatus: "Stacked",
//       salesstatus: "Approved",
//       username: "JAY6201",
//       Dateandtimeofnextaction: "23/04/17 03:00",
//       Remarks: "Alma's encouraging remarks to her son about his superb sandwich making skills gave",
//       lastModifiedBy: "Branch Manager",
//       reason: "Branch",
//     },
//     {
//       Dateandtimeofupdate: "21/03/17 20:16",
//       applicationStatus: "Completed",
//       salesstatus: "Approved",
//       username: "JAY6201",
//       Dateandtimeofnextaction: "23/04/17 03:00",
//       Remarks: "Alma's encouraging remarks to her son about his superb sandwich making skills gave",
//       lastModifiedBy: "Zonal Officer",
//       reason: "Form incomplete and Image mismatch with the ekyc document",
//     },
//   ];

//   const renderTrialCard = ({ item, index }) => {
//     const { Dateandtimeofupdate, salesstatus, Dateandtimeofnextaction, applicationStatus, username, lastModifiedBy, Remarks, reason } = item;

//     return (
//       <Block style={styles.leadCardBox}>
//         <ScrollView>
//           <Block flex row space="between" middle style={styles.leadCardRow}>
//             <Block flex>
//               <Text style={styles.labelTextStyle}>Sales Status</Text>
//               <Text style={styles.valueTextStyle}>
//                 {salesstatus || 'N/A'}
//               </Text>
//             </Block>
//             <Block flex fluid>
//               <Text style={[styles.labelTextStyle, { textAlign: "justify" }]}>Application Status</Text>
//               <Text style={[styles.valueTextStyle, { textAlign: "justify" }]}>
//                 {applicationStatus || 'N/A'}
//               </Text>
//             </Block>
//           </Block>
//           <Block flex row space="between" middle style={styles.leadCardRow}>
//             <Block flex>
//               <Text style={styles.labelTextStyle}>Date And Time Of Update</Text>
//               <Text style={styles.valueTextStyle}>
//                 {Dateandtimeofupdate || 'N/A'}
//               </Text>
//             </Block>
//             <Block flex fluid>
//               <Text style={[styles.labelTextStyle, { textAlign: "justify" }]}>Next Action Date And Time</Text>
//               <Text style={[styles.valueTextStyle, { textAlign: "justify" }]}>
//                 {Dateandtimeofnextaction || 'N/A'}
//               </Text>
//             </Block>
//           </Block>
//           <Block flex row space="between" style={styles.leadCardRow}>
//             <Block flex>
//               <Text style={styles.labelTextStyle}>Username</Text>
//               <Text style={styles.valueTextStyle}>{username || 'N/A'}</Text>
//             </Block>
//             <Block flex fluid>
//               <Text style={[styles.labelTextStyle, { textAlign: "justify" }]}>
//                 Status Updated By
//               </Text>
//               <Text style={[styles.valueTextStyle, { textAlign: "justify" }]}>
//                 {lastModifiedBy || 'N/A'}
//               </Text>
//             </Block>
//           </Block>

//           <Block flex row space="between" style={styles.leadCardRow}>

//             <Block flex>
//               <Text style={[styles.labelTextStyle, { textAlign: "justify" }]}>
//                 Remarks
//               </Text>
//               {Remarks === "" || Remarks.length <= 10 ?
//                 <Text
//                   numberOfLines={1} style={[styles.valueTextStyle, { textAlign: "justify" }]}>
//                   {Remarks || "N/A"}
//                 </Text>
//                 :
//                 <Block>
//                   <Text
//                     numberOfLines={1} style={[styles.valueTextStyle, { textAlign: "justify" }]}>
//                     {Remarks}
//                   </Text>
//                   <TouchableOpacity onPress={() => readMore(Remarks)}><Text color={materialTheme.COLORS.PRIMARY_BLUE}>Read More</Text></TouchableOpacity>
//                   {/* <CompactButton onPress={() => readMore(Remarks)} buttonText={"Read More"} /> */}
//                   {/* <Button onPress={() => readMore(Remarks)} style={{ width: 100, height: 30 }}>Read More</Button> */}
//                 </Block>
//               }
//             </Block>
//             <Block flex fluid>
//               <Text style={[styles.labelTextStyle, { textAlign: "justify" }]}>
//                 Dropped Reason
//               </Text>
//               {reason === "" || reason.length <= 10 ?
//                 <Text
//                   numberOfLines={1} style={[styles.valueTextStyle, { textAlign: "justify" }]}>
//                   {reason}
//                 </Text>
//                 :
//                 <Block>
//                   <Text
//                     numberOfLines={1} style={[styles.valueTextStyle, { textAlign: "justify" }]}>
//                     {reason}
//                   </Text>
//                   <TouchableOpacity onPress={() => readMore(Remarks)}><Text color={materialTheme.COLORS.PRIMARY_BLUE}>Read More</Text></TouchableOpacity>
//                   {/* <Button onPress={() => expandContent(reason)} style={{ width: 100, height: 30 }}>Read More</Button> */}
//                 </Block>
//               }
//             </Block>
//           </Block>
//         </ScrollView>
//         <MoreOrLessModal
//           show={showMoreLessModalDescription}
//           onClose={() => setshowMoreLessModalDescription(false)}
//           description={modaldescription}
//         />
//       </Block>
//     );
//   };

//   const renderMainContent = () => {
//     return (
//       <AppWrapper>
//         <Block style={styles.components}>
//           <Block style={styles.leadCardBoxContainer}>
//             <Spacer spaceMargin={20} />
//             <FlatList
//               data={data}
//               renderItem={renderTrialCard}
//               showsVerticalScrollIndicator={false}
//               keyExtractor={(item, index) => `sales-history-${index}`}
//             ></FlatList>
//           </Block>
//         </Block>
//       </AppWrapper>
//     );
//   };

//   if (data.length <= 0)
//     return (
//       <BlankData
//         title="No Details Found"
//         description="Sales History Not Available or Contact The Administration"
//       />
//     );

//   return renderMainContent();
// };

// export default SalesHistory;

// const styles = StyleSheet.create({
//   components: {
//     paddingTop: theme.SIZES.BASE,
//     paddingHorizontal: theme.SIZES.BASE * 0.5,
//   },
//   leadCardBoxContainer: {
//     backgroundColor: "white",
//     borderRadius: 0,
//   },
//   leadCardRow: {
//     marginBottom: theme.SIZES.BASE / 2,
//   },
//   leadCardBox: {
//     padding: theme.SIZES.BASE * 1.5,
//     borderBottomWidth: 1,
//     borderBottomColor: theme.COLORS.WARNING,
//   },
//   valueTextStyle: {
//     textTransform: "capitalize",
//     fontSize: theme.SIZES.BASE,
//     fontWeight: "bold",
//   },
//   valueTextStyleLarge: {
//     textTransform: "capitalize",
//     fontSize: theme.SIZES.BASE * 1.5,
//     fontWeight: "bold",
//   },
//   labelTextStyle: {
//     fontSize: theme.SIZES.BASE * 0.75,
//     color: theme.COLORS.PRIMARY_BLUE,
//   },
//   badge: {
//     backgroundColor: "transparent",
//     paddingHorizontal: theme.SIZES.BASE,
//     paddingVertical: theme.SIZES.BASE / 2,
//     borderWidth: 1,
//     borderColor: materialTheme.COLORS.BORDER_COLOR,
//     borderRadius: 30,
//     fontSize: 12,
//   },
// });

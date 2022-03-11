// hàm rút gọn cho useSelector
// dataContact chính là data của reducer và trong configureStore
export const dishes = (state)=> state.dataContact.dishes;
export const comments = (event)=> event.dataContact.comments;
export const leaders = (event)=> event.dataContact.leaders;
export const promotions = (event)=> event.dataContact.promotions;
export const contact = (event)=> event.dataContact.contact;
//user chính là data của reducerthunk và trong configureStore
export const selectUser = (state) => state.user.currentUser;
export const selectLoading = (state) => state.user.isLoading;
export const selectErrorMessage = (state) => state.user.errorMessage; 
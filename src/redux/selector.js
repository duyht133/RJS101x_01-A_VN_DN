// hàm rút gọn cho useSelector
// dataContact chính là action trong reducer và trong configureStore
export const dishes = (state)=> state.dataContact.dishes;
export const comments = (event)=> event.dataContact.comments;
export const leaders = (event)=> event.dataContact.leaders;
export const promotions = (event)=> event.dataContact.promotions;
export const contact = (event)=> event.dataContact.contact;

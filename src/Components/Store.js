
import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
persist
  ((set, get) => ({

    //  Empty Card
    card: [],



    // Add the item 
    additemtoCard: (item) => {
      let additems = get().card
      let itemInCard = {
        ...item,
        qty: 1

      }

      // Matching  the itemincard "id" with the additems "id" and Store  in  a "addtoCard" variable 
      let addtoCard = additems.find((element) => element.id === itemInCard.id)

      //  To checked if addtoCard  is exist  then  qty increase and append with  itemIncard 
      if (addtoCard) {
        itemInCard = {
          ...itemInCard,
          qty: addtoCard.qty += 1
        }

        const updatedCard = additems.map((element) => {
          if (element.id == itemInCard.id) {
            return itemInCard
          }
          else {
            return element
          }

        })
        set({
          card: [...updatedCard]
        })
      }
      else {
        set(
          {
            card: [...additems, itemInCard]
          }
        )
      }
    },
    incrementQty: (item) => {
      let additems = get().card
      let itemInCard = {
        ...item,

      }

      const increment = additems.find((element) => element.id === itemInCard.id)
      if (increment) {
        itemInCard = {
          ...itemInCard,
          qty: increment.qty += 1
        }

        const updatedcard = additems.map((element) => {
          if (element.id == itemInCard.id) {
            return itemInCard
          }
          else {
            return element
          }
        })

        set({
          card: [...updatedcard]
        })
      }

      else {
        set({
          card: [...additems, itemInCard]
        })
      }

    },

    removeItemFromCard: (itemid) => {
      let additems = get().card;
      console.log(additems, "line no 92")
      let itemInCard = {
        id: itemid
      }
      console.log(itemInCard, "itemcard line no 96")

      const removeItem = additems.filter((item) => item.id !== itemInCard.id)
      console.log(removeItem)
      set({
        card: [...removeItem]
      })
    },

    decrementQty: (product) => {
      const additems = get().card;
      let itemInCard = {
        ...product

      }


      const decrement = additems.find((x) => x.id === itemInCard.id)
      if (decrement) {
        itemInCard = {
          ...itemInCard,
          qty: decrement.qty -= 1
        }

        const updatedcard = additems.map((element) => element.id === itemInCard.id ? itemInCard : element).filter((element) => {
          return element.qty !== 0
        })
        console.log(updatedcard)



        set({
          card: [...updatedcard]
        })
      }

      else {
        set({
          card: [...additems, itemInCard]
        })
      }

    },
    
   

  }),
  
  
  
  )

)
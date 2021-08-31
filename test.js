let groceries = [
    {
      item: 'banana',
      units: '1',
      isPurchased: false
    },
    {
      item: 'apple',
      units: '2',
      isPurchased: true
    },
    {
      item: 'orange',
      units: '3',
      isPurchased: false
    }
  ]

  let notPurchasedItems = groceries.filter((grocery, index) => {
    if (grocery.isPurchased === false) {
      return true
    } else {
      return false
    }
  })

  let purchasedItems = groceries.filter((grocery, index) => {
    if (grocery.isPurchased === true) {
      return true
    } else {
      return false
    }
  })

  console.log('Groceries: ')
  console.log(groceries)
  console.log('Not Purchased: ')
  console.log(notPurchasedItems)
  console.log('Purchased: ')
  console.log(purchasedItems)



  console.log('Groceries After Splice: ')
  let groceriesCopy = groceries.slice()
  let removedItem = groceriesCopy.splice(1, 1)
  console.log(groceriesCopy)

  console.log('Removed Grocery Item: ')
  console.log(removedItem)
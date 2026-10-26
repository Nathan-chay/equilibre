export const formatEUR = (cents: number) => 
    new Intl.NumberFormat('fr-FR', {
        style: 'currency', currency: 'EUR',
    }).format(cents / 100)
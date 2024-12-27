<script>
    import { Search } from 'lucide-svelte';
</script>

<main>
    <h1>Trouvez la maison de vos rêves en une clique</h1>
    <p>Explorez un large choix de propriétés, comparez les meilleures options et concrétisez vos projets immobiliers en toute sérénité</p>
    <searchbar >
        <input type="text" placeholder="Rechercher une propriété">
        <button><Search size={22}/></button>
    </searchbar>
    <tags>
        <p>Rechercher par type de propriété:</p>
        <tag>Appartements</tag>
        <tag>Maisons</tag>
        <tag>Immeubles</tag>
        <tag>Commerces</tag>
        <tag>Terrains</tag>
    </tags>
</main>

<style>
    main {
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 30%;
        min-height: 50vh;
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-align: center;
    }
    
    p {
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        color: #333;
    }

    searchbar {
        display: flex;
        gap: 1rem;
        margin-top: 3rem;
        background: #f3f3f6;
        padding: .7em;
        border-radius: 100px;
        width: 100%;
        justify-content: space-between;
        

        input {
            border: none;
            outline: none;
            font-family: 'Poppins', sans-serif;
            font-size: .8rem;
            padding: 0.5rem 1rem;
            border-radius: 100px;
            width: 100%;
            background: none;
        }

        button{
            background: rgb(162, 218, 33);
            color: #fff;
            border: none;
            width: 40px;
            aspect-ratio: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100px;
            cursor: pointer;
            transition: background 0.3s;
        }

        button:hover {
            background: rgb(60, 150, 110);
        }
    }
    tags{
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        align-items: center;

        p{
            white-space: nowrap;
            font-size: .8rem;
            font-weight: 500;
            color: #525252;
        }
        tag{
            background: #f3f3f6;
            padding: .5rem 1rem;
            border-radius: 100px;
            font-size: .8rem;
            font-weight: 500;
            color: #333;
            cursor: pointer;
            transition: background 0.3s;
        }

        tag:hover {
            background: #e0e0e5;
        }
    }
</style>
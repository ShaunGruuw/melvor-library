export async function setup({ onCharacterLoaded, onModsLoaded, onInterfaceReady }) {

    onModsLoaded(async (ctx) => {
        console.log('Magic_Book loaded')
    });

    onCharacterLoaded(ctx => {});

    onInterfaceReady((ctx) => {});
}


import Image from "next/image";

export default function gardening() {
    return (
        <>
            <title>MSJ Guerilla Gardening</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content="MSJ Guerilla Gardening"/>
            <meta property="og:description" content="Making Mission a little prettier, one plant at a time"/>
            <meta property="og:image" content="/rose.png"/>
            <style>
                {`
                    div {
                        max-width: 45em;
                        margin: auto;
                        margin-top: 2em;
                        padding: 1em;
                    }

                    blockquote {
                        margin: 0;
                    }

                    figure {
                        margin: 0;
                        padding: 1.5em;
                        background-color: #eee;
                    }

                        figcaption {
                            text-align: right;
                        }
                    `}
                </style>
                <link rel="icon" type="image/png" sizes="32x32" href="favicon.png"/>
            <div>
                <figure>
                    <blockquote>
                        <h1>guerilla gardening</h1>
                        <p><i>noun</i>. the act of gardening &ndash; raising food, plants, or flowers &ndash; on land that the
                            gardeners do not have the legal rights to cultivate</p>
                    </blockquote>
                    <figcaption>&mdash;<a href="https://en.wikipedia.org/wiki/Guerrilla_gardening">Wikipedia</a></figcaption>
                </figure>
                <h2>who are we?</h2>
                <p>we&#39;re a group of Mission students who like plants and think rules are just suggestions.</p>
                <h2>how can i join?</h2>
                <p>plant a seed. water a flower. (avoid invasive species though&mdash;do your due diligence!)</p>
                <p>tell your friends, too. and if you plant something, send us a picture! you can find Adrian on Discord as
                    drain#5012.</p>
                <Image className="block mx-auto" src="/qr-code.png" width={150} height={150} alt="QR code leading to this webpage"/>
            </div>
        </>
    );
}
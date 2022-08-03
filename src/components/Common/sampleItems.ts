export const sampleItems = [
  {
    index: 0,
<<<<<<< HEAD
    title: "Bitcoin Integration",
    image: require("../../../static/img/samples/bitcoin.png").default,
    domains: ["DeFi"],
    languages: ["Motoko", "Rust"],
    level: ["Intermediate"],
    contentType: ["Code Samples", "Documentation"],
    body: "Deploy a canister on the Internet Computer that can send and receive Bitcoin.",
    links: {
      motoko: "/",
      rust: "/",
      docs: "/",
      //docs: "docs/current/developer-docs/functionality/bitcoin/deploying-your-first-bitcoin-dapp",
    },
  },
  {
    index: 1,
    title: "Threshold ECDSA",
    image: require("../../../static/img/samples/thresholdECDSA.png").default,
    domains: ["DeFi"],
    languages: ["Motoko", "Rust"],
    level: ["Intermediate"],
    contentType: ["Code Samples", "Documentation"],
    body: "Build a threshold ECDSA test key on a subnet.",
    links: {
      motoko: "/",
      rust: "/",
      docs: "/",
      //docs: "docs/current/developer-docs/functionality/bitcoin/t-ecdsa#code-walkthrough",
    },
  },
  {
    index: 2,
=======
    title: "Bitcoin",
    image: require("../../../static/img/samples/bitcoin.png").default,
    domains: ["DeFi"],
    languages: ["Motoko", "Rust"],
    level: ["Advanced"],
    contentType: ["Code Samples", "Documentation", "Live Demos"],
    body: "Deploy a canister on the Internet Computer that can send and receive Bitcoin.",
    links: {
      action: {
        text: "Get code",
        to: "https://github.com/dfinity/examples/tree/master/motoko/basic_bitcoin",
      },
      motoko: "https://github.com/dfinity/examples/tree/master/motoko/basic_bitcoin",
      rust: "https://github.com/dfinity/examples/tree/master/rust/basic_bitcoin",
      docs: "/docs/current/samples/deploying-your-first-bitcoin-dapp",
    },
  },
  {
    index: 1,
    title: "Threshold ECDSA",
    image: require("../../../static/img/samples/t-ecdsa.png").default,
    domains: ["Global"],
    languages: ["Motoko", "Rust"],
    level: ["Advanced"],
    contentType: ["Code Samples", "Documentation", "Live Demos"],
    body: "Build a threshold ECDSA test key on a subnet.",
    links: {
      action: {
        text: "Get code",
        to: "https://github.com/dfinity/examples/tree/master/motoko/threshold-ecdsa",
      },
      motoko: "https://github.com/dfinity/examples/tree/master/motoko/threshold-ecdsa",
      rust: "https://github.com/dfinity/examples/tree/master/rust/threshold-ecdsa",
      docs: "/docs/current/samples/t-ecdsa-sample",
    },
  },
  {
    index: 2,
    title: "Hello World",
    image: require("../../../static/img/samples/helloWorld.png").default,
    domains: ["Website"],
    languages: ["Motoko", "Rust", "Javascript"],
    level: ["Beginner"],
    contentType: ["Code Samples", "Documentation", "Live Demos"],
    body: "Deploy a dead simple dapp using two canisters serving a web page.",
    links: {
      action: {
        text: "Get code",
        to: "https://github.com/dfinity/examples/tree/master/motoko/hello",
      },
      motoko: "https://github.com/dfinity/examples/tree/master/motoko/hello",
      rust: "https://github.com/dfinity/examples/tree/master/rust/hello",
      livePreview: "https://6lqbm-ryaaa-aaaai-qibsa-cai.ic0.app/",
      docs: "/docs/current/samples/hello",
    },
  },
  {
    index: 3,
    title: "Static Website",
    image: require("../../../static/img/samples/staticWebsite.png").default,
    domains: ["Website", "Global"],
    languages: ["Motoko", "Rust", "Javascript"],
    level: ["Beginner"],
    contentType: ["Documentation", "Videos"],
    body: "Quickly set up a static website structure, add content and basic styling, and deploy on the IC.",
    links: {
      action: { text: "Docs", to: "/samples/host-a-website" },
      docs: "/docs/current/samples/host-a-website",
      youtube: "https://www.youtube.com/watch?v=JAQ1dkFvfPI",
    },
  },
  {
    index: 4,
    title: "Basic Dex",
    image: require("../../../static/img/samples/basicDex.png").default,
    domains: ["DeFi", "Website"],
    languages: ["Motoko", "Rust", "Javascript"],
    level: ["Intermediate"],
    contentType: ["Code Samples", "Documentation", "Videos", "Live Demos"],
    body: "Build dapp to enable DeFi applications on the IC.",
    links: {
      action: {
        text: "Get Code",
        to: "https://github.com/dfinity/examples/tree/master/motoko/defi",
      },
      motoko: "https://github.com/dfinity/examples/tree/master/motoko/defi",
      rust: "https://github.com/dfinity/examples/tree/master/rust/defi",
      livePreview: "https://gzz56-daaaa-aaaal-qai2a-cai.ic0.app/",
      docs: "/docs/current/samples/dex",
      youtube: "https://youtu.be/fLbaOmH24Gs",
    },
  },
  {
    index: 5,
>>>>>>> master
    title: "NFT Minting",
    image: require("../../../static/img/samples/nftMinting.png").default,
    domains: ["NFT", "Gaming"],
    languages: ["Rust"],
    level: ["Intermediate"],
    contentType: ["Code Samples", "Documentation", "Videos"],
    body: "Create a user generated NFT and share it. This dapp uses the DIP721 NFT standard.",
    links: {
      rust: "https://github.com/dfinity/examples/tree/master/rust/dip721-nft-container",
      docs: "/docs/current/samples/nft",
      youtube: "https://youtu.be/1po3udDADp4",
    },
  },
  {
<<<<<<< HEAD
    index: 3,
    title: "Hello World",
    image: require("../../../static/img/samples/helloWorld.png").default,
    domains: ["Website"],
    languages: ["Motoko", "Rust", "Javascript"],
    level: ["Beginner"],
    contentType: ["Code Samples", "Documentation", "Live Demos"],
    body: "Deploy a dead simple dapp using two canisters serving a web page.",
    links: {
      motoko: "https://github.com/dfinity/examples/tree/master/motoko/hello",
      rust: "https://github.com/dfinity/examples/tree/master/rust/hello",
      livePreview: "https://6lqbm-ryaaa-aaaai-qibsa-cai.ic0.app/",
      docs: "docs/current/samples/hello",
    },
  },
  {
    index: 4,
    title: "Static Website",
    image: require("../../../static/img/samples/staticWebsite.png").default,
    domains: ["Website", "Global"],
    languages: ["Motoko", "Rust", "Javascript"],
    level: ["Beginner"],
    contentType: ["Documentation", "Videos"],
    body: "Quickly set up a static website structure, add content and basic styling, and deploy on the IC.",
    links: {
      docs: "docs/current/samples/host-a-website",
      youtube: "https://www.youtube.com/watch?v=JAQ1dkFvfPI",
    },
  },
  {
    index: 5,
    title: "Basic Dex",
    image: require("../../../static/img/samples/basicDex.png").default,
    domains: ["DeFi", "Website"],
    languages: ["Motoko", "Rust", "Javascript"],
    level: ["Intermediate"],
    contentType: ["Code Samples", "Documentation", "Videos", "Live Demos"],
    body: "Build dapp to enable DeFi applications on the IC.",
    links: {
      motoko: "https://github.com/dfinity/examples/tree/master/motoko/defi",
      rust: "https://github.com/dfinity/examples/tree/master/rust/defi",
      livePreview: "https://gzz56-daaaa-aaaal-qai2a-cai.ic0.app/",
      docs: "docs/current/samples/dex",
      youtube: "https://youtu.be/fLbaOmH24Gs",
    },
  },
  {
=======
>>>>>>> master
    index: 6,
    title: "Basic DAO",
    image: require("../../../static/img/samples/basicDAO.png").default,
    domains: ["Global", "DeFi"],
    languages: ["Motoko", "Rust"],
    level: ["Intermediate"],
    contentType: ["Code Samples", "Documentation", "Videos"],
    body: "Dapp initializes a set of accounts and corresponding tokens as well as enables  proposals for communal votes.",
    links: {
      motoko:
        "https://github.com/dfinity/examples/tree/master/motoko/basic_dao",
      rust: "https://github.com/dfinity/examples/tree/master/rust/basic_dao",
      docs: "/docs/current/samples/dao",
      youtube: "https://youtu.be/3IcYlieA-EE",
    },
  },
  {
    index: 7,
    title: "Encrypted note-taking",
    image: require("../../../static/img/samples/encryptedNoteTaking.png")
      .default,
    domains: ["Website"],
    languages: ["Motoko", "Rust", "Javascript"],
    level: ["Advanced"],
    contentType: ["Code Samples", "Documentation", "Videos", "Live Demos"],
    body: "Create, access and modify confidential notes from multiple devices using Internet Identity and end-to-end encryption.",
    links: {
      motoko:
        "https://github.com/dfinity/examples/tree/master/motoko/encrypted-notes-dapp/src/encrypted_notes_motoko",
      rust: "https://github.com/dfinity/examples/tree/master/motoko/encrypted-notes-dapp/src/encrypted_notes_rust",
      livePreview: "https://cvhrw-2yaaa-aaaaj-aaiqa-cai.ic0.app/",
      docs: "/docs/current/samples/encrypted-notes",
      youtube: "https://youtu.be/DZQmtPSxvbs",
    },
  },
  {
    index: 8,
    title: "Token transfer",
    image: require("../../../static/img/samples/tokenTransfer.png").default,
    domains: ["Global", "DeFi"],
    languages: ["Motoko", "Rust"],
    level: ["Advanced"],
    contentType: ["Code Samples", "Documentation"],
    body: "Create a dapp that can transfer tokens to its most active users.",
    links: {
      motoko:
        "https://github.com/dfinity/examples/tree/master/motoko/ledger-transfer",
      rust: "https://github.com/dfinity/examples/tree/master/rust/tokens_transfer",
      docs: "/docs/current/samples/token-transfer",
    },
  },
  {
    index: 9,
    title: "Actor reference",
    image: require("../../../static/img/samples/actorReference.png").default,
    domains: ["Website"],
    languages: ["Motoko"],
    level: ["Advanced"],
    contentType: ["Code Samples", "Documentation"],
    body: "Learn how the IC management canister functions as an actor (reference).",
    links: {
      motoko:
        "https://github.com/dfinity/examples/tree/master/motoko/actor_reference",
    },
  },
  {
    index: 10,
    title: "WebGL",
    image: require("../../../static/img/samples/webgl.png").default,
    domains: ["Gaming", "Website", "Global"],
    languages: ["Motoko", "Rust", "Javascript"],
    level: ["Beginner"],
    contentType: ["Documentation"],
    highlights: ["Gaming", "Website", "Global", "Beginner"],
    body: "Demonstrates how to deploy a Unity WebGL game on the IC.",
    links: {
<<<<<<< HEAD
      docs: "docs/current/samples/host-unity-webgl",
=======
      action: {
        text: "Get Code",
        to: "https://github.com/dfinity/examples/tree/master/hosting/unity-webgl-template",
      },
      docs: "/docs/current/samples/host-unity-webgl",
>>>>>>> master
    },
  },
];

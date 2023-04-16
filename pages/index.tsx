import Chat from "@/components/Chat/Chat";
import { useMemo, useState } from "react";

const messages = [
    {
        role: "user",
        content: "nextjs의 장점을 알려줘",
    },
    {
        role: "assistant",
        content:
            "**Next.js** 는 리액트 애플리케이션 개발에 활용되는 프레임워크로, 아래와 같은 다양한 장점이 있습니다.\n\n1. **서버사이드 렌더링 (SSR)** : 검색 엔진 최적화(SEO) 및 초기 렌더링 성능 향상에 도움이 됩니다. 처음 페이지 로딩 시에 필요한 HTML과 CSS를 생성하여 사용자에게 전달하고, 이후 자바스크립트로 동작하여 빠른 컨텐츠 제공이 가능합니다.\n\n2. **Static Site Generation (SSG)** : 데이터가 변하지 않거나 변동이 적을 때, 사전에 빌드하여 정적 파일 형태로 서비스할 수 있는 SSG 기능을 지원합니다. 빠른 페이지 로딩 속도와 저렴한 호스팅 비용을 동시에 활용할 수 있는 장점이 있습니다.\n\n3. **TypeScript & Redux** : Next.js에서는 TypeScript와 Redux를 바로 사용할 수 있습니다.\n\n4. **Hot Module Replacement (HMR)** : 페이지 로드를 다시 실행하지 않고도 모듈 변경 시 바로 변경된 결과를 화면에서 볼 수 있는 기능을 제공합니다.\n\n5. **API Routes** : Express 또는 다른 서버 프레임워크 없이 API 엔드포인트를 정의하고 다른 서비스로 라우팅할 수 있습니다.\n\n6. **Code Splitting** : 필요한 코드만 로드하고 복잡도를 줄입니다. 규모가 큰 애플리케이션에서 UI 성능이 향상됩니다.\n\n7. **Automatic Polyfill** : 브라우저 환경이나 사용자 환경에 맞춰 필요한 것만 자동으로 로드합니다.\n\n8. **Next.js Analytics** : 성능 및 사용자 분석, 회귀 분석 및 A/B 테스팅을 위한 클라이언트-사이드 라이브러리가 포함되어 있습니다.\n\n이렇게 다양한 장점들로 인해, Next.js는 리액트 앱 개발 및 배포를 더 쉽고 효율적으로 만들어줍니다.",
    },
    {
        role: "user",
        content:
            "\nnextjs에서 라우팅을 사용하려고 하는데 '/' 와 '/:id' 가 같은 내용의 페이지를 보여주고 싶으면 어떻게 해야할까?",
    },
    {
        role: "assistant",
        content:
            "`Next.js`에서는 동적 라우팅을 지원하는데, 이를 활용하여 '/' 와 '/:id' 가 같은 내용의 페이지를 보여줄 수 있습니다. \n\n동적 라우트를 사용하면 `pages` 디렉토리에 `[id].js` 라는 파일을 생성하면 됩니다. 해당 파일 내부에는 `getStaticPaths`와 `getStaticProps` 함수를 구현하여 데이터를 불러오고 해당 데이터를 보여주도록 하면 됩니다. 이 경우 `:id`라는 동적 값이 해당 파일에서 `props.params.id`로 전달됩니다.\n\n아래는 해당 내용을 구현한 예시 코드입니다.\n\n```javascript\n// pages/[id].js\nimport { useRouter } from 'next/router'\n\nfunction Post({ post }) {\n  const router = useRouter()\n  if (router.isFallback) {\n    return <div>Loading...</div>\n  }\n\n  return (\n    <div>\n      <h1>{post.title}</h1>\n      <p>{post.body}</p>\n    </div>\n  )\n}\n\nexport async function getStaticPaths() {\n  return { paths: [{ params: { id: 1 } }, { params: { id: 2 } }], fallback: true }\n}\n\nexport async function getStaticProps({ params }) {\n  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)\n  const post = await res.json()\n\n  return {\n    props: {post},\n  }\n}\n\nexport default Post\n```\n\n위 코드에서는 `getStaticPaths` 함수에서 라우트 파라미터로 사용될 `id` 값을 임의로 1, 2로 지정하고, `fallback` 속성을 `true`로 설정해두었기 때문에 어떤 숫자가 들어와도 페이지를 보여줄 수 있습니다. \n\n따라서 '/' 와 '/:id' 를 같은 페이지를 보여줄 수 있습니다.",
    },
    {
        role: "user",
        content: "그러면 pages/index.js에는 어떻게 해야해?",
    },
    {
        role: "assistant",
        content:
            "`pages/index.js` 파일은 홈 페이지를 나타내는 파일입니다. 만약 `pages/[id].js` 파일에서 동적 라우팅으로 들어온 `id` 값이 없는 경우, `pages/index.js` 파일에 정의된 페이지를 보여주도록 설정할 수 있습니다.\n\n아래는 `pages/index.js` 파일에 간단한 내용을 추가하여 예시를 보여드리겠습니다.\n\n```javascript\n// pages/index.js\nfunction Home() {\n  return (\n    <div>\n      <h1>Welcome to my homepage!</h1>\n      <p>Here you can find all my posts.</p>\n    </div>\n  )\n}\n\nexport default Home\n```\n\n위 코드에서는 단순히 `Welcome to my homepage!`과 `Here you can find all my posts.` 메시지를 보여주는 간단한 예시 페이지를 작성해보았습니다.\n\n`id` 값이 없는 경우 홈페이지로 리다이렉트되도록 `pages/[id].js` 파일에 `fallback: true` 를 설정해주면 됩니다. 이 경우 `pages/index.js` 파일에서 정의한 내용이 보여지게 됩니다.\n\n```javascript\n// pages/[id].js\nimport { useRouter } from 'next/router'\n\nfunction Post({ post }) {\n  const router = useRouter()\n  if (router.isFallback) {\n    return <div>Loading...</div>\n  }\n\n  return (\n    <div>\n      <h1>{post.title}</h1>\n      <p>{post.body}</p>\n    </div>\n  )\n}\n\nexport async function getStaticPaths() {\n  return { paths: [{ params: { id: 1 } }, { params: { id: 2 } }], fallback: true }\n}\n\nexport async function getStaticProps({ params }) {\n  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)\n  const post = await res.json()\n\n  return {\n    props: {post},\n  }\n}\n\nexport default Post\n```\n\n위 코드에서 `fallback: true` 를 설정하였기 때문에 `id` 값이 없는 경우, `pages/index.js` 파일에 정의한 홈페이지가 보여지게 됩니다.",
    },
];

export default function Home() {
    const [t, setT] = useState(false);
    const dummy = useMemo(() => (t ? messages : []), [t]);
    const toggle = () => setT((p) => !p);

    return (
        <div className="flex justify-center w-full">
            <button className="fixed z-10 text-white right-4" onClick={toggle}>
                dummy-toggle
            </button>
            <Chat item={dummy} />
        </div>
    );
}

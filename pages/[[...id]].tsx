import Chat from "@/components/Chat/Chat";
interface Props {
    item: any[];
}
export default function Home({ item }: Props) {
    return (
        <div className="flex justify-center w-full">
            <Chat item={item} />
        </div>
    );
}

export async function getServerSideProps(context: any) {
    const { id } = context.params;
    const data = [
        {
            id: "def5f848-818c-4dd3-9b9c-6044d7b7a193",
            name: "nextjs의 장점을 알려줘",
            messages: [
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
            ],
        },
        {
            id: "a59fa488-6866-45fd-a2cb-75707b5b48fb",
            name: "nextjs에서 라우팅을 사용하려고 하는데 '/' 와 ...",
            messages: [
                {
                    role: "user",
                    content:
                        "nextjs에서 라우팅을 사용하려고 하는데 '/' 와 '/:id' 가 같은 내용의 페이지를 보여주고 싶으면 어떻게 해야할까?",
                },
                {
                    role: "assistant",
                    content:
                        "Next.js에서 `/`와 `/:id`가 같은 내용의 페이지를 보여주고 싶으면, 동적 경로 매개 변수로 `id`를 선택적으로 만들고 Pages 디렉토리에 하나의 파일을 생성해서 라우트 처리해야 합니다.\n\n1. pages 디렉토리에 `pages/[id].js` 파일을 생성합니다.\n2. `getStaticProps` 함수를 사용하여 페이지의 데이터를 가져옵니다.\n3. `/:id` 로 라우팅하는 링크를 만들 때 `/:id?`로 옵셔널 파라미터로 처리합니다.\n4. `useRouter` 훅을 사용하여 쿼리 파라미터에 따라 데이터를 가져옵니다.\n5. 두 경로에서 사용해야 하는 공통 컴포넌트가 있다면 다른 파일로 분리해서 사용합니다.\n\n이렇게 하면, `/`와 `/:id` 경로가 동일한 페이지를 보여줄 수 있습니다. \n\n다음은 `pages/[id].js` 파일의 예시입니다.:\n\n```javascript\nimport { useRouter } from 'next/router';\n\nexport default function MyPage({ data }) {\n  const router = useRouter();\n  const { id } = router.query;\n\n  return (\n    <div>\n      <h1>{data.title}</h1>\n      <p>{data.content}</p>\n      <p>ID: {id}</p>\n    </div>\n  );\n}\n\nexport async function getStaticProps({ params }) {\n  // 페이지 데이터 로드\n  const data = await loadData(params.id);\n\n  return {\n    props: {\n      data,\n    },\n  };\n}\n```\n\n그리고 공통으로 사용해야 하는 컴포넌트가 있다면 별도의 컴포넌트 파일로 분리해서 사용합니다. \n\n예를 들어 `myCommonComponent.js` 파일을 생성하여, 다음과 같이 사용할 수 있습니다.\n\n```javascript\nexport default function MyCommonComponent() {\n  return <div>공통 컴포넌트</div>;\n}\n```\n\n그리고 `MyPage`컴포넌트에서는 `MyCommonComponent`를 다음과 같이 사용할 수 있습니다.\n\n```javascript\nimport MyCommonComponent from './myCommonComponent';\n\nexport default function MyPage({ data }) {\n  // ...\n\n  return (\n    <div>\n      <MyCommonComponent />\n      <h1>{data.title}</h1>\n      <p>{data.content}</p>\n      <p>ID: {id}</p>\n    </div>\n  );\n}\n```\n이렇게 해서, `/`,  `/123` 경로 모두 같은 페이지를 보여줄 수 있습니다.",
                },
                {
                    role: "user",
                    content: "방금 질문의 제목을 만들어줘",
                },
                {
                    role: "assistant",
                    content:
                        "Next.js에서 '/'와 '/:id'가 같은 내용의 페이지를 보여주고 싶을 때, 어떻게 처리해야 할까요?",
                },
                {
                    role: "user",
                    content: "처음 질문의 제목을 짧게 만들어줘",
                },
                {
                    role: "assistant",
                    content:
                        "Next.js에서 '/'와 '/:id'가 같은 페이지를 보여주려면?",
                },
                {
                    role: "user",
                    content: "첫번째 응답을 요약해서 제목으로 짧게 만들어줘",
                },
                {
                    role: "assistant",
                    content:
                        "Next.js에서 '/'와 '/:id'의 같은 페이지 라우팅 처리 방법",
                },
            ],
        },
        {
            id: "aeb2bc30-cab0-4901-8ba2-e1bb62764928",
            name: "nextjs에서 라우팅을 사용하려고 하는데 '/' 와 ...",
            messages: [
                {
                    role: "user",
                    content:
                        "nextjs에서 라우팅을 사용하려고 하는데 '/' 와 '/:id' 가 같은 내용의 페이지를 보여주고 싶으면 어떻게 해야할까?",
                },
                {
                    role: "assistant",
                    content:
                        '만약에 `Next.js`에서 `/`와 `/:id` 경로에서 같은 내용의 페이지를 보여주기를 원한다면, `pages` 디렉토리 안에 `index.js`, `[_id].js` 파일을 생성하고 아래와 같은 코드를 추가할 수 있습니다.\n\n```js\n// pages/index.js\n\nimport React from "react";\n\nconst HomePage = () => {\n  return <div>This is the home page!</div>;\n};\n\nexport default HomePage;\n```\n\n```js\n// pages/[_id].js\n\nimport React from "react";\nimport { useRouter } from "next/router";\n\nconst DynamicPage = () => {\n  const router = useRouter();\n  const { id } = router.query;\n\n  return (\n    <div>\n      This is the dynamic page! The ID is: {id}\n    </div>\n  );\n};\n\nexport default DynamicPage;\n```\n\n이 예제에서, `index.js` 파일은 `/` 경로에서, 그리고 `[_id].js` 파일은 `/:id` 경로에서 렌더링 됩니다.\n\n`/_id` 경로에서 렌더링 되는 페이지에서는 `useRouter` 훅을 사용하여 URL 쿼리 매개 변수를 가져옵니다. `useRouter` 훅은 `Next.js`의 라우터를 사용하여 URL 쿼리 매개 변수를 가져 옵니다. `{ id } = router.query` 코드를 사용하여 객체 구조 분해 할당을 사용하여 `id`를 사용할 수 있습니다.\n\n위 코드에서는 `pages/[_id].js` 파일 대신 `pages/[id].js` 파일 이름을 사용할 수도 있습니다. `Next.js`는 파일 이름의 첫 부분이 `[`이면 동적 경로를 처리하는 것으로 인식합니다. 그러므로 `[_id]` 대신 `[id]`를 사용할 수 있습니다.',
                },
                {
                    role: "user",
                    content: "방금 질문을 요약해서 제목으로 만들어줘",
                },
                {
                    role: "assistant",
                    content:
                        "Next.js에서 /와 /:id 경로에서 같은 페이지 보여주기",
                },
            ],
        },
        {
            id: "ba5c369d-ce36-416f-a6a6-0bd929524e4e",
            name: "다음 문맥을 요약해서 제목으로 만들어줘.\n\n만약에 Ne...",
            messages: [
                {
                    role: "user",
                    content:
                        '다음 문맥을 요약해서 제목으로 만들어줘.\n\n만약에 Next.js에서 /와 /:id 경로에서 같은 내용의 페이지를 보여주기를 원한다면, pages 디렉토리 안에 index.js, [_id].js 파일을 생성하고 아래와 같은 코드를 추가할 수 있습니다.\n\njs\n코드 복사\n\n// pages/index.js\n\nimport React from "react";\n\nconst HomePage = () => {\n  return <div>This is the home page!</div>;\n};\n\nexport default HomePage;\njs\n코드 복사\n\n// pages/[_id].js\n\nimport React from "react";\nimport { useRouter } from "next/router";\n\nconst DynamicPage = () => {\n  const router = useRouter();\n  const { id } = router.query;\n\n  return (\n    <div>\n      This is the dynamic page! The ID is: {id}\n    </div>\n  );\n};\n\nexport default DynamicPage;\n이 예제에서, index.js 파일은 / 경로에서, 그리고 [_id].js 파일은 /:id 경로에서 렌더링 됩니다.\n\n/_id 경로에서 렌더링 되는 페이지에서는 useRouter 훅을 사용하여 URL 쿼리 매개 변수를 가져옵니다. useRouter 훅은 Next.js의 라우터를 사용하여 URL 쿼리 매개 변수를 가져 옵니다. { id } = router.query 코드를 사용하여 객체 구조 분해 할당을 사용하여 id를 사용할 수 있습니다.\n\n위 코드에서는 pages/[_id].js 파일 대신 pages/[id].js 파일 이름을 사용할 수도 있습니다. Next.js는 파일 이름의 첫 부분이 [이면 동적 경로를 처리하는 것으로 인식합니다. 그러므로 [_id] 대신 [id]를 사용할 수 있습니다.',
                },
                {
                    role: "assistant",
                    content:
                        '"Next.js에서 동적 경로 처리를 위한 페이지 생성 방법"',
                },
            ],
        },
        {
            id: "b83736c6-1b9b-4432-831a-944f6bb7796f",
            name: "아무런 두 문장을 만들어줘",
            messages: [
                {
                    role: "user",
                    content: "아무런 두 문장을 만들어줘",
                },
                {
                    role: "assistant",
                    content:
                        "Sure, here are two sentences:\n\n1. The sun is shining brightly in the clear blue sky.\n2. She smiled warmly and offered me a cup of tea.",
                },
                {
                    role: "user",
                    content: "두 문장을 한글로 이어서 만들어줘",
                },
                {
                    role: "assistant",
                    content:
                        "좋아요, 여기 두 문장을 연결합니다:\n\n1. 맑은 파란 하늘에 햇빛이 밝게 비추고 있습니다.\n2. 그녀는 따뜻하게 미소를 지은 후 차 한 잔을 내밀��습니다.",
                },
                {
                    role: "user",
                    content: "asd",
                },
                {
                    role: "assistant",
                    content:
                        '죄송합니다, "asd"는 의미가 없는 입력값 같습니다. 도움이 필요하시면 언제든지 말씀해주세요!',
                },
            ],
        },
        {
            id: "454e9986-f59d-419d-bc3d-6579474032da",
            name: "버튼의 색상이 #22232D 인데 hover했을 때 색...",
            messages: [
                {
                    role: "user",
                    content:
                        "버튼의 색상이 #22232D 인데 hover했을 때 색생을 추천해줘",
                },
                {
                    role: "assistant",
                    content:
                        "버튼 색상이 #22232D 일 때, hover 시 권장하는 색상은 다음과 같습니다.\n\n- 밝은 색상: #6B717F\n- 어두운 색상: #1D1E24\n\n밝은 색상을 사용하면 버튼의 일부분이 밝아져 더욱 눈에 띄게 나타날 것입니다. 반면, 어두운 색상을 사용하면 버튼 전체가 약간 어두운 느낌으로 변하게 되어 더욱 뚜렷한 느낌을 줄 수 있습니다.\n\n하지만, 말씀드리는 색상은 추천색상이며 버튼이 위치한 디자인과 배경색 등에 따라 다르게 느껴질 수 있습니다. 따라서, 적용하기 전에 미리 확인해보시는 것이 좋습니다.",
                },
            ],
        },
        {
            id: "a6175306-940a-4b65-8f5c-6b3f475e2c76",
            name: "nestjs의 장점을 알려줘",
            messages: [
                {
                    role: "user",
                    content: "nestjs의 장점을 알려줘",
                },
                {
                    role: "assistant",
                    content:
                        '## NestJS란?\n\nNestJS는 Node.js를 위한 프레임워크로, Angular의 영향을 받았으며 Express와 Fastify라는 강력한 웹 프레임워크 위에서 구축되었습니다.\n\nNestJS는 Server Side Rendering (SSR), WebSocket, Microservices, GraphQL 등 다양한 어플리케이션 아키텍처 및 패턴을 지원합니다.\n\n## NestJS의 장점\n\n### 1. 구조화된 코드\n\nNestJS는 Angular 모듈 구조와 같은 구조화된 코드를 사용하여 코드의 가독성을 높일 수 있습니다. 이 구조는 NestJS에서 "모듈"이라는 개념을 도입하여 각 모듈에는 컨트롤러, 서비스, 프로바이더 등이 포함됩니다.\n\n### 2. TypeScript의 지원\n\nNestJS는 TypeScript를 지원합니다. TypeScript는 JavaScript의 모든 것을 지원하며, 추가로 정적 타입을 제공합니다. 이로 인해 개발자는 런타임에서 발생할 수 있는 오류를 미리 예방할 수 있으며, 코드 내부의 버그를 줄일 수 있습니다.\n\n### 3. 강력한 의존성 주입 시스템\n\nNestJS에는 의존성 주입(Dependency Injection) 시스템이 내장되어 있습니다. 이 시스템은 클래스, 모듈 혹은 구성 요소 사이에 쉽게 의존성을 주입할 수 있도록 도와줍니다. 의존성 주입을 통해 코드 복잡도를 낮출 수 있기 때문에 보다 유지보수가 용이한 코드를 작성할 수 있습니다.\n\n### 4. 간편한 테스트\n\nNestJS에는 테스트를 간편하게 작성할 수 있는 방법이 제공됩니다. 간단한 모듈 단위의 단위 테스트부터 전체 애플리케이션의 통합 테스트까지 가능합니다. 또한, NestJS CLI를 사용하면 빠르고 쉽게 테스트 코드를 생성할 수 있습니다.\n\n### 5. 빠른 개발\n\nNestJS는 Express와 Fastify를 사용하기 때문에 높은 성능을 보장합니다. 또한, 빠르게 개발할 수 있는 기능과 CLI 도구가 제공되기 때문에 애플리케이션을 더 빠르게 개발할 수 있습니다.',
                },
            ],
        },
        {
            id: "43d45c38-ac8b-4774-bdfe-11c361403146",
            name: '<div style={{display: "flex"}}...',
            messages: [
                {
                    role: "user",
                    content:
                        '<div style={{display: "flex"}}>\n<div id="1" />\n<div id="2">\ntitle\n</div>\n<div id="3">\nicon\n</div>\n</div>\n\nid 1,2,3번이 모두 같은 width를 가지도록 css를 알려줘',
                },
                {
                    role: "assistant",
                    content:
                        '다음과 같이 CSS 코드를 작성할 수 있습니다:\n\n```css\n#1, #2, #3 {\n  width: 33.33%;\n  box-sizing: border-box;\n}\n```\n\n위의 코드는 `id` 속성이 각각 `1`, `2`, `3`인 요소에 적용됩니다. `width` 속성을 `33.33%`로 설정하여 3개의 요소가 동일한 너비를 가지도록 합니다. `box-sizing` 속성은 박스 모델의 크기 계산 방식을 변경하기 위함입니다.\n\n이를 `div` 요소 내부에 포함하여 사용하려면 다음과 같이 HTML 코드를 삽입합니다:\n\n```html\n<div style="display: flex;">\n  <div id="1" style="width: 33.33%; box-sizing: border-box;"></div>\n  <div id="2" style="width: 33.33%; box-sizing: border-box;">\n    title\n  </div>\n  <div id="3" style="width: 33.33%; box-sizing: border-box;">\n    icon\n  </div>\n</div>\n```\n\n`style` 속성을 사용하여 CSS 코드를 요소별로 적용합니다. 이때 `display: flex;` 속성을 사용하여 요소를 수평으로 배치할 수 있습니다.',
                },
                {
                    role: "user",
                    content: "flex를 이용해서 알려줘",
                },
                {
                    role: "assistant",
                    content:
                        '다음과 같이 CSS 코드를 작성하여 `flex` 속성을 이용하여 동일한 너비를 가진 요소들을 수평 정렬할 수 있습니다:\n\n```css\n.flex-container {\n  display: flex;\n}\n\n.flex-item {\n  flex: 1;\n}\n```\n\n위 코드에서 `.flex-container`는 부모 요소가 되고, `.flex-item`은 자식 요소가 됩니다. `display: flex;`를 사용하여 `.flex-container`가 `flex` 컨테이너가 되며, `flex: 1;`을 사용하여 모든 `.flex-item` 요소가 균등한 너비를 가지도록 합니다.\n\n이를 `div` 요소 내부에 포함하여 사용하려면 다음과 같이 HTML 코드를 삽입합니다:\n\n```html\n<div class="flex-container">\n  <div class="flex-item" id="1"></div>\n  <div class="flex-item" id="2">title</div>\n  <div class="flex-item" id="3">icon</div>\n</div>\n```\n\n위 코드에서 `.flex-container` 클래스를 부모 `div` 요소에 추가하고, 자식 요소들은 `.flex-item` 클래스를 추가합니다. 이렇게 하면 `display` 속성이 `flex`로 설정된 부모 요소의 자식 요소들이 자동으로 수평으로 정렬됩니다.',
                },
            ],
        },
    ];

    const target = data.find((h: any) => h.id === id?.[0]);

    return { props: { item: target?.messages || [] } };
}

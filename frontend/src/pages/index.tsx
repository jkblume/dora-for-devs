import Head from 'next/head';
import ChatGPT from '@/components/ChatGPT'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'

import DataPrivacyBar from '@/components/DataPrivacyBar'
import HeaderBar from '@/components/HeaderBar'

import styles from './index.module.less'

export default function Home() {
  interface CheckboxChangeEvent {
    target: {
      checked: boolean;
    };
  }

  const handleCheckboxChange = (event: CheckboxChangeEvent): void => {
    console.log('Checkbox Changed:', event.target.checked); // Log the checkbox state
  };

  return (
    <>
    <Head>
      <title>DORA for Devs</title>
      <meta name="description" content="Chat with ChatGPT and a rag case in between that adds content to answer your developer related questions about dora!" />
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
    </Head>
    <Layout hasSider className={styles.layout}>
      <Layout>
        <HeaderBar />
        {/* <DataPrivacyBar onCheckboxChange={handleCheckboxChange}/> */}
        <Content className={styles.main}>
          <ChatGPT fetchPath="/api/chat-completion" />
        </Content>
      </Layout>
    </Layout>
    </>
  )
}

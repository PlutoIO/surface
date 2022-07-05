import * as Unicons from '@iconscout/react-unicons';
import { ReactNode } from 'react';

export function Index() {
  return (
    <div className="w-full h-screen flex flex-col gap-y-16 justify-center items-center">
      <h1 className="text-6xl font-black">Pluto.</h1>
      <div className="flex flex-row gap-4">
        <Button
          icon={<Unicons.UilGithub />}
          link="https://github.com/PlutoIO"
          title="Pluto"
          description="Go visit our Github Profile, check out our amzing Projects!"
        ></Button>
        <Button
          icon={<Unicons.UilBookOpen />}
          link="https://github.com/PlutoIO"
          title="Docs"
          description="Visit our Documentation!⚡️"
        ></Button>
      </div>
    </div>
  );
}

interface Button {
  icon: ReactNode;
  link: string;
  title: string;
  description?: string;
}

const Button = (props: Button) => {
  return (
    <a
      className="rounded-xl flex flex-row w-64 ring-1 ring-gray-200 p-2 gap-3"
      href={props.link}
    >
      <div className="py-1 text-gray-900">{props.icon}</div>

      <div className="flex flex-col">
        <a className="font-bold text-xl">{props.title}</a>
        <p className="text-xs font-light text-gray-500">{props.description}</p>
      </div>
    </a>
  );
};

export default Index;

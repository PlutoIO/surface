import * as Unicons from '@iconscout/react-unicons';
import { ReactNode } from 'react';

export function Index() {
  return (
    <div className="grid grid-cols-8 gap-5 mx-40 selection:bg-cyan-200 selection:bg-opacity-40">
      <div className="pt-96 col-span-4 col-start-3 mx-auto">
        <h1 className="text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-800 hover:to-blue-600 transition-all duration-500 ease-in ">
          Pluto.
        </h1>
      </div>

      <div className="pt-20 w-full col-span-8"></div>
      <div className="col-span-2 w-full col-start-2">
        <Button
          icon={<Unicons.UilGithub />}
          link="https://github.com/PlutoIO"
          title="Repositories"
          description="Go visit our Github Profile, check out our amzing Projects!"
        />
      </div>
      <div className="col-span-2 w-full">
        <Button
          icon={<Unicons.UilBox />}
          link="https://github.com/PlutoIO"
          title="Docs"
          description="For all you Developers feel free to check out! 📙"
        />
      </div>
      <div className="col-span-2 w-full">
        <Button
          icon={<Unicons.UilTwitter />}
          link="https://github.com/PlutoIO"
          title="Twitter"
          description="See our new Projects as soon as we release and discuss problems with us! "
        />
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
      className="rounded-xl flex flex-row h-24 ring-2 ring-gray-200 p-2 gap-3 hover:ring-blue-500 transition-all duration-200 ease-out"
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

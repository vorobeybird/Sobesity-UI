import Button from '@/components/shared/button';
import Input from '@/components/shared/input';
import axios from 'axios';
import classNames from 'classnames';
import React from 'react';
import { useState, useEffect } from 'react';
import python from './python.png';
import Modal from '@/components/modal';

type User = {
  id: number;
  name: string;
};

const SkillSelection = () => {
  const [searchInput, setInput] = useState<string>('');
  const [spanBlocks, setSpanBlocks] = useState<number[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<number>(0);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const onInput = (event: React.FormEvent<HTMLInputElement>): void => {
    setInput(event.currentTarget.value);
  };

  const blocks = [0, 1, 2, 3, 4, 5];

  const applyGridSpan = (blocks: number[]): number[] => {
    const arr = [];
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i + 1] % 3 === 0) {
        arr.push(blocks[i], blocks[i + 1]);
        i = (i + 1) * 2;
      }
    }
    return arr;
  };

  const onClickSkill = (selectedSkill: number) => {
    setSelectedSkill(selectedSkill);
  };

  const onStartClick = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const blocksSpan = applyGridSpan(blocks);
    setSpanBlocks(blocksSpan);
  }, []);

  return (
    <div className="flex flex-col justify-top items-left gap-4">
      <div>{searchInput}</div>
      <h2 className="h2">
        Choose in which direction you want to start the practice.
      </h2>
      <Input
        onChange={(event) => onInput(event)}
        containerStyles="w-96 h-8"
      ></Input>
      <div className="grid grid-cols-4 gap-4 w-full self-center ">
        {blocks.map((block, i) => (
          <div
            onClick={() =>
              console.log(block === selectedSkill, block, selectedSkill)
            }
            className={classNames('bg-black-light h-[150px]', {
              'col-span-2': spanBlocks.includes(block),
            })}
          >
            <Button
              variant="primary"
              onClick={() => onClickSkill(block)}
              type="button"
              title="skill"
            >
              <div
                className={`flex h-full items-end justify-left ${
                  block == selectedSkill &&
                  'border-solid border-2 border-primary-light'
                }`}
              >
                <div className="p-4">Python </div>
                <img src={python} alt="hei " className="w-10 h-10" />
              </div>
            </Button>
          </div>
        ))}
      </div>
      <Button
        variant="primary"
        containerStyle="w-32 h-12 bg-primary-light self-end"
        type="button"
        title="start"
        onClick={onStartClick}
      >
        Start
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className=" w-[500px] h-[350px] bg-black-light flex flex-col gap-4">
          <div className="p-10 h-full flex flex-col gap-4">
            <Button variant="secondary" type="button">
              Easy
            </Button>
            <Button variant="secondary" type="button">
              Medium
            </Button>
            <Button variant="secondary" type="button">
              Hard
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default React.memo(SkillSelection);

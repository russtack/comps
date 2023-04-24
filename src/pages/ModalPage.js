import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      </p>
    </Modal>
  );
  return (
    <div>
      {showModal && modal}
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        esse velit laboriosam expedita accusantium, totam tempora sequi
        architecto perspiciatis earum labore saepe officia possimus eaque fuga,
        adipisci hic sunt maxime? Perspiciatis pariatur dignissimos adipisci
        possimus similique provident, enim incidunt vel nobis. Ea, cum ipsum?
        Maiores libero accusamus error accusantium voluptates fuga dolor
        consequuntur sapiente nihil tempora, quia molestias laboriosam et!
        Commodi consectetur, minima aspernatur aut sit eum quisquam repudiandae
        laborum odio sunt harum nemo rerum aliquam rem eaque tenetur suscipit?
        Impedit voluptatum porro quibusdam. Blanditiis quasi est deleniti culpa
        inventore! Placeat sed omnis iste consectetur dolorem corrupti saepe.
        Est itaque doloremque mollitia id illo cupiditate nihil, odit unde
        laborum fugit dignissimos expedita autem nam doloribus esse nemo,
        delectus tempore sequi. Repudiandae iure quaerat adipisci. Cum
        exercitationem placeat, fugit harum officiis eligendi impedit dolor
        dicta vero natus deleniti reiciendis aliquam ea quod. Maxime hic ullam
        ad earum in fuga iure repudiandae? Nemo aliquam explicabo voluptates
        corporis in rem nisi tenetur sequi laborum ducimus? Culpa rerum
        provident laborum nam quaerat officiis quo eligendi facilis? Qui nam
        debitis ducimus repudiandae! Adipisci, enim modi? Placeat, labore iure
        corporis laborum aperiam obcaecati totam blanditiis ex, ratione, quia
        dicta cupiditate temporibus quam ullam. Impedit officia magni
        exercitationem dicta sequi minima. Eum eaque fugit expedita nulla ad!
        Laudantium enim ex nisi error quas! Pariatur unde ducimus est. Expedita,
        nisi natus suscipit aut consequuntur dolorem error aliquam eum ab vel.
        Exercitationem, iusto aliquam. Quia, aspernatur! Officia, reprehenderit
        veritatis. Quia obcaecati eaque exercitationem fugiat, neque totam
        cumque voluptas delectus excepturi quos quo temporibus aliquid, nam hic
        dolore tempora minima doloremque? Earum consequuntur excepturi eveniet
        asperiores aspernatur facere minus laboriosam! Hic veritatis at ea magni
        corporis dolores voluptatibus eveniet itaque cumque optio? Praesentium
        libero explicabo quaerat tenetur delectus animi reprehenderit, aperiam
        vitae impedit veniam perferendis eaque voluptates tempora officia
        repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat alias commodi deserunt eligendi facere mollitia, corrupti minus
        nesciunt obcaecati nostrum ex porro odio quibusdam eius ipsum dolore
        libero aliquam minima? Explicabo incidunt neque, ea aliquam provident
        nam esse quas, repudiandae culpa sequi minus placeat, praesentium
        obcaecati dolorum enim animi eum nisi ipsam unde facere possimus.
        Adipisci eius facere ullam reiciendis. Voluptatem est doloribus
        temporibus hic itaque earum adipisci optio sit. Eveniet sint molestiae,
        iusto soluta atque mollitia voluptates, impedit error facilis officia
        qui animi. Tenetur architecto possimus ducimus illum voluptates. Itaque
        excepturi consequatur enim ut sit cumque dolore labore magni provident
        voluptatem, deserunt dolorem mollitia accusamus explicabo sint libero
        vel quasi quidem ad sequi molestiae impedit. Iure modi beatae tempore!
        Aspernatur nobis ea laboriosam dolores facere blanditiis nemo, quibusdam
        possimus at velit corporis ex est ipsam eum sapiente a, perspiciatis
        recusandae! Deleniti eos assumenda saepe enim velit aliquid quibusdam
        impedit. Ducimus ut ipsam distinctio dicta minima expedita, soluta nam
        commodi vitae iure? Atque officiis temporibus quaerat at aliquid autem
        voluptatibus tenetur expedita aliquam dicta quidem recusandae, non iste
        magnam totam! Esse expedita doloremque nihil! Pariatur perspiciatis ea
        eligendi tempora porro amet fugiat soluta, laudantium unde ex autem,
        impedit adipisci repellendus eaque dolorum nisi, reiciendis aut sapiente
        voluptatibus totam itaque est? Dignissimos laborum qui amet iure quos
        atque, fugit quas tempora aliquam consectetur a ullam totam unde ex
        explicabo consequuntur aspernatur facere doloremque fuga corporis nulla.
        Velit quas quasi natus quia! Omnis temporibus quibusdam nihil totam
        possimus blanditiis unde excepturi ad molestias minus ea labore ab
        architecto aspernatur at quas nulla, minima quo natus dicta! Explicabo
        eius adipisci id quaerat eaque. Quidem adipisci sunt quod molestias unde
        ea omnis facere optio doloremque aut est necessitatibus illum beatae
        eveniet repellendus ex, eligendi nesciunt nulla sapiente culpa
        praesentium minus. Officiis debitis pariatur repudiandae?
      </p>
    </div>
  );
}

export default ModalPage;

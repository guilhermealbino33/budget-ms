import { container } from "tsyringe";
import { IAMQPProvider } from "./models/IAMQPProvider";

import RabbitMQ from "./impl/RabbitMQ";

const providers = {
  rabbitmq: container.resolve(RabbitMQ),
};

container.registerInstance<IAMQPProvider>("AMQPProvider", providers.rabbitmq);

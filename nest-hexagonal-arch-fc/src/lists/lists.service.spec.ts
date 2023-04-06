import { ListsService } from './lists.service';
import { ListRepositoryInMemory } from './repositories/list-repository.in-memory';

describe('ListsService', () => {
  let service: ListsService;
  let listPersistenceRepository: ListRepositoryInMemory;
  let listIntegrationRepository: ListRepositoryInMemory;

  beforeEach(() => {
    listPersistenceRepository = new ListRepositoryInMemory();
    listIntegrationRepository = new ListRepositoryInMemory();
    service = new ListsService(
      listPersistenceRepository,
      listIntegrationRepository,
    );
  });

  it('should create a list', async () => {
    const listEntity = await service.create({ name: 'any_name' });
    expect(listPersistenceRepository.items).toEqual([listEntity]);
    expect(listIntegrationRepository.items).toEqual([listEntity]);
  });

  //
  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [ListsService],
  //   }).compile();
  //
  //   service = module.get<ListsService>(ListsService);
  // });
  //
  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });
});

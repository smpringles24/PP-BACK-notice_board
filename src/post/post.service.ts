import { Injectable } from '@nestjs/common';
import { PostEntity } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create_post.dto';
import { UpdatePostDto } from './dto/update_post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async getAllPost(): Promise<PostEntity[]> {
    return await this.postRepository.find();
  }

  async createPost(newPost: CreatePostDto): Promise<PostEntity> {
    return await this.postRepository.save(newPost);
  }

  async deletePost(id: number): Promise<number> {
    await this.postRepository.delete({ id });
    return id;
  }

  async updatePost(id: number, updatePost: UpdatePostDto): Promise<PostEntity> {
    const post = await this.postRepository.findOne({ where: { id: id } });

    if (!post) {
      throw new Error('Post not found');
    }

    const updatedPost = {
      ...post,
      ...updatePost,
    };

    return await this.postRepository.save(updatedPost);
  }
}

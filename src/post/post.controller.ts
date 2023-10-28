import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { PostEntity } from './entities/post.entity';
import { Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { CreatePostDto } from './dto/create_post.dto';
import { UpdatePostDto } from './dto/update_post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAll(): Promise<PostEntity[]> {
    return this.postService.getAllPost();
  }

  @Post()
  createPost(@Body() newPost: CreatePostDto): Promise<PostEntity> {
    return this.postService.createPost(newPost);
  }

  @Delete(':id')
  deletePost(@Param('id') id: number): Promise<number> {
    return this.postService.deletePost(id);
  }

  @Patch(':id')
  updatePost(
    @Param('id') id: number,
    @Body() updatePost: UpdatePostDto,
  ): Promise<PostEntity> {
    return this.postService.updatePost(id, updatePost);
  }
}
